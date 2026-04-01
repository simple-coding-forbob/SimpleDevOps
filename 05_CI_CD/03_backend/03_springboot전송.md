# 벡엔드 전송: 깃허브 액션 -> AWS 컴퓨터
# 자바 설치됨
배포 위치 = /home/ubuntu

# 벡엔드 CI/CD 흐름
git push
   ↓
GitHub Actions(배포 자동화)
   ↓
war 압축
   ↓
EC2 전송: /home/ubuntu

# Secrets 설정
Settings → Secrets and Variables → Actions에서 추가
EC2_HOST → EC2 퍼블릭 IP
EC2_USER → EC2 로그인 유저 (ubuntu)
EC2_SSH_KEY → PEM 파일 내용 (줄바꿈 포함)


# 벡엔드 프로젝트 폴더 구조, (box drawing character: ├)
simpledmsreact
 ├ src
 ├ gradle
 └ build
 
# 프로젝트 구조
project
 ├─ simpledmsreact/*
 └─ .github
     └─ workflows
         └─ deploy.yml