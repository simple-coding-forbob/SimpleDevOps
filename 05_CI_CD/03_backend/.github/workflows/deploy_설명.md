name: backend deploy

on:
  push:
    branches: [ main ]   # main 브랜치에 push 발생 시 실행

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:

      # 1) GitHub 소스 다운로드
      - uses: actions/checkout@v4

      # 2) Java 설치
      - uses: actions/setup-java@v4
        with:
          distribution: 'temurin'
          java-version: '17'

      # 3) Spring Boot WAR 빌드1
      - name: Grant execute permission
        run: chmod +x SimpleDmsReact/gradlew

      # 3) Spring Boot WAR 빌드2
      - name: build
        run: |
          cd SimpleDmsReact
          ./gradlew bootWar

      # 4) SSH key 생성
      - name: SSH key
        run: |
          echo "${{ secrets.EC2_SSH_KEY }}" > was.pem
          chmod 600 was.pem

      # 5) WAR 업로드
      # 배포위치: ~ : /home/ubuntu 폴더를 의미합니다.
      - name: upload war
        run: |
          scp -o StrictHostKeyChecking=no -i was.pem \
          SimpleDmsReact/build/libs/*.war \
          ${{ secrets.EC2_USER }}@${{ secrets.EC2_HOST }}:~

      # 6) 기존 서버 종료 (8080 포트 기준)
      # "sudo fuser -k 8080/tcp || true" : 8080 실행되는 프로그램을 찾아서 종료하라는 의미
      # -k 옵션: 프로그램 종료하라는 옵션
      # true : 앞에 명령어 실패해도 성공으로 간주하라는 의미(실패로 인한 중단을 막기 위한 조치입니다.)
      - name: stop backend
        run: |
          ssh -o StrictHostKeyChecking=no -i was.pem ${{ secrets.EC2_USER }}@${{ secrets.EC2_HOST }} \
          "sudo fuser -k 8080/tcp || true"

      # 7) 서버 시작
      # "nohup java -jar ~/SimpleDmsReact-0.0.1-SNAPSHOT.war > app.log 2>&1 &" : 벡엔드 스프링 실행
      # app.log ： 실행하는 로그는 이 파일에 작성합니다
      # 2>&1     : 에러 표시도 app.log 에 작성하라는 의미입니다.
      # nohup ~ & : 프로그램이 실행될때 숨겨서 실행하라는 의미입니다.  
      - name: start backend
        run: |
          ssh -o StrictHostKeyChecking=no -i was.pem ${{ secrets.EC2_USER }}@${{ secrets.EC2_HOST }} \
          "nohup java -jar ~/SimpleDmsReact-0.0.1-SNAPSHOT.war > app.log 2>&1 &"