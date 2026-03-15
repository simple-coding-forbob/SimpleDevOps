# 리액트 전송: 깃허브 액션 -> AWS 컴퓨터
Nginx 설치됨
배포 위치 = /var/www/html/

# 리액트 CI/CD 흐름
git push
   ↓
GitHub Actions(배포 자동화)
   ↓
npm install
   ↓
npm run build
   ↓
build 폴더 생성
   ↓
EC2 nginx html 전송

# Secrets 설정
Settings → Secrets and Variables → Actions에서 추가
EC2_HOST → EC2 퍼블릭 IP
EC2_USER → EC2 로그인 유저 (ubuntu)
EC2_SSH_KEY → PEM 파일 내용 (줄바꿈 포함)


# 리액트 프로젝트 폴더 구조
frontend
 ├ src
 ├ public
 ├ package.json
 └ build
 
# 프로젝트 구조
project
 ├─ frontend/*
 └─ .github
     └─ workflows
         └─ deploy.yml