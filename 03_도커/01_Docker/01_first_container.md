# 01_Step01_Docker/01_first_container.md
# 01 : 컨테이너 첫걸음
# 컨테이너 : 이미지(s/w 일종), 
#            컨테이너(실행된 s/w)
#            컨테이너 간에 독립된 공간에서 활동함

# 예제1) 도커에서 ubuntu 이미지 실행하기
# 사용법) docker pull ubuntu
# -- 이미지 다운로드 시작
C:\Users\TaeGyung>docker pull ubuntu
Using default tag: latest
latest: Pulling from library/ubuntu
01d7766a2e4a: Download complete
Digest: sha256:d1e2e92c075e5ca139d51a140fff46f84315c0fdce203eab2807c7e495eff4f9
Status: Downloaded newer image for ubuntu:latest
docker.io/library/ubuntu:latest

C:\Users\TaeGyung>
# -- 이미지 다운로드 끝

# 다운로드된 이미지 보기 명령어
# 사용법) docker images
C:\Users\TaeGyung>docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
nginx        latest    0236ee02dcbc   5 days ago    237MB
ubuntu       latest    d1e2e92c075e   2 weeks ago   117MB

# 퀴즈 1) 이미지 다운로드 : 
# 태그 생략 : 최신버전(latest)
# 사용법) docker pull 이미지명:태그
# 리눅스 : 무료(centos:7)
C:\Users\TaeGyung>docker pull centos:7
7: Pulling from library/centos
2d473b07cdd5: Download complete
Digest: sha256:be65f488b7764ad3638f236b7b515b3678369a5124c47b8d32916d6487418ea4
Status: Downloaded newer image for centos:7
docker.io/library/centos:7

# 다운로드된 이미지 보기 명령어
C:\Users\TaeGyung>docker images
REPOSITORY   TAG       IMAGE ID       CREATED       SIZE
nginx        latest    0236ee02dcbc   5 days ago    237MB
ubuntu       latest    d1e2e92c075e   2 weeks ago   117MB

# 예제2) 컨테이너 실행 : docker run
# nginx 을 실행해 보세요
# 사용법) docker run -it --name nginx -p 8080:8080 -d nginx bash
# docker run  : 컨테이너 실행 명령
# -d          : daemon(숨겨져서 실행되는 프로그램), 백그라운 프로세스
# -it         : 터미널로 접속할 수 있게 하는 옵션
# --name 별명 : 컨테이너 별명 붙이기 옵션
# nginx       : 이미지명
# bash        : 사용할 셀 환경(예: bash, sh 등)
C:\Users\TaeGyung>docker run -it -d --name ubuntu ubuntu bash
7bc426545fd197ec949b6b3676bfc027f106d9efbb2e7572fa381c258a85059a

# 전체(실행/중지) 컨테이너 보기
# 사용법) docker ps -a
C:\Users\TaeGyung>docker ps -a
CONTAINER ID   IMAGE     COMMAND   CREATED         STATUS         PORTS     NAMES
7bc426545fd1   ubuntu    "bash"    7 seconds ago   Up 7 seconds             ubuntu

# 퀴즈
C:\Users\TaeGyung>docker run -it -d --name centos centos:7 bash
68a5c9b7fc6dac4763107f62fb97e5b1d86bef83f7e97c5ad04e26028e9c413f
# 전체(실행/중지) 컨테이너 보기
C:\Users\TaeGyung>docker ps -a
CONTAINER ID   IMAGE      COMMAND   CREATED         STATUS         PORTS     NAMES
68a5c9b7fc6d   centos:7   "bash"    7 seconds ago   Up 6 seconds             centos
7bc426545fd1   ubuntu     "bash"    5 minutes ago   Up 5 minutes             ubuntu

C:\Users\TaeGyung>

# 컨테이너 로그 출력 : docker logs
# 사용법) docker logs 컨테이너명(컨테이너id, 별명)
# docker logs ubuntu
C:\Users\TaeGyung>docker logs ubuntu

# 컨테이너에 접속하기(실행된 컨테이너만 가능)
# 사용법) docker attach 컨테이너명(컨테이너id, 별명)

C:\Users\TaeGyung>docker attach ubuntu
root@7bc426545fd1:/# exit
exit

C:\Users\TaeGyung>

# 퀴즈
C:\Users\TaeGyung>docker logs centos

# 컨테이너에 접속하기(실행된 컨테이너만 가능)
# 사용법) docker attach 컨테이너명(컨테이너id, 별명)

C:\Users\TaeGyung>docker attach centos
root@7bc426545fd1:/# exit
exit

C:\Users\TaeGyung>


# 컨테이너에 시작
# 사용법) docker start 컨테이너명(컨테이너id, 별명)
C:\Users\TaeGyung>docker start ubuntu
ubuntu
# 컨테이너에 중지
C:\Users\TaeGyung>docker stop ubuntu
ubuntu

C:\Users\TaeGyung>

# 퀴즈
C:\Users\TaeGyung>docker start centos
centos
# 컨테이너에 중지
C:\Users\TaeGyung>docker stop centos
centos

C:\Users\TaeGyung>

# 컨테이너에서 삭제
C:\Users\TaeGyung>docker rm ubuntu
ubuntu

# 이미지 목록에서 삭제
C:\Users\TaeGyung>docker rmi ubuntu
Untagged: ubuntu:latest
Deleted: sha256:d1e2e92c075e5ca139d51a140fff46f84315c0fdce203eab2807c7e495eff4f9

C:\Users\TaeGyung>


# 컨테이너에서 삭제
C:\Users\TaeGyung>docker rm centos
centos

# 이미지 목록에서 삭제
C:\Users\TaeGyung>docker rmi centos:7
Untagged: centos:7
Deleted: sha256:be65f488b7764ad3638f236b7b515b3678369a5124c47b8d32916d6487418ea4

C:\Users\TaeGyung>