# playbook 작성: nginx.yml
---
# 이 Playbook의 이름 (설명용 제목)
- name: Install and Start Nginx on Local EC2
  # inventory 파일의 그룹명
  hosts: local
  # sudo 권한으로 실행
  become: yes
  # 작업 목록
  tasks:
    # 1) nginx 패키지 설치
    - name: Install nginx
      # Ubuntu 패키지 설치 모듈
      apt:
        # 설치할 패키지 이름
        name: nginx
        # nginx가 설치된 상태로 유지
        state: present
        # apt update 실행
        update_cache: yes

    # 2) nginx 서비스 시작
    - name: Start nginx service
      # 서비스 제어 모듈
      systemd:
        # 서비스 이름
        name: nginx
        # 실행 상태로 만들기
        state: started
        # 서버 재부팅 시 자동 시작
        enabled: yes