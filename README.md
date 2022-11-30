# About The Project

EYE TAG

# Feature List

1. 파일 드롭다운 기능
2. 파일 선택 기능
3. 파일 다운로드 기능
4. 번역 기능
5. 이메일 복사 기능
6. 이메일 전송 기능
7. 스크롤 업 기능

# Feature List Details

1. 로컬의 비디오 파일만을 드롭다운 해 파일을 전송할 수 있다.
2. 로컬의 비디오 파일만을 선택 해 파일을 전송할 수 있다.
3. 비디오 파일의 이름이 10자 이상일 경우 말 줄임표를 적용하였다.
4. 해당 비디오 파일의 PATH 값을 DB로 전송하게 된다.
5. DB에 저장 된 파일을 다시 웹으로 불러와 다운로드가 가능하다.
6. 한,중,일,영 으로 번역이 가능하며 기본 값은 영문이다.
7. 문의하기 페이지에서 개발자의 이메일을 클릭 시 클립복사가 된다.
8. 문의하기 페이지에서 메시지 보내기를 통해 원하는 개발자에게 메일을 보낼 수 있다.
9. 일정 이하 스크롤 다운 시 페이지 하단에 스크롤 탑 버튼이 노출된다.

# Data

- DOWN FILE NAME ( 다운로드 한 파일의 이름을 저장 )

<br />

- EMAIL DATA ( 보낸 날짜, 사용자 이메일, 메시지, 받은이 이메일, 제목을 저장 )

# Web Deployment

- AWS - Amplify

도메인 구축 및 테스트 서버, 운영 서버 분리


# DB

- 구글 스프레드 시트

사용자가 보낸 정보를 ( 보낸 날짜, 사용자 이메일, 메시지, 받은이 이메일, 제목 ) 저장

- MariaDB

다운로드 파일의 이름을 저장

# Contributors

pm & dev - 한대현
 
dev - 김도현

design - 김민진

ai - 전은서

pl - 방승원

# Code Convention

Google Code Convention을 적용

## Code rule

1. 모든 확장자명은 js로 진행
2. 폴더 구조로 통일 -> src/compoenets/(컴포넌트명 폴더)/index.js (주의사항: index.js안의 랜더 함수의 이름은 컴포넌트명 폴더 이름으로 짓는다.)
3. 데이터 파일은 사용하는 컴포넌트의 해당 폴더 안에 있어야 하며 파일명을 데이터 이름으로 짓는다.
4. 모든 함수는 애로우 함수로 통일
5. 모든 컴포넌트 폴더는 components폴더 안에 넣는다.

## Library rule

1. npm 대신 yarn으로 통일
2. 디자인 툴은 되도록이면 사용을 자제하지만 사용하게 된다면 다음과 같은 툴을 사용 (antd, chakra ui, mui)

# Git rule

## Commit rule

1. 커밋메세지는 다음과 같다. 날짜 + 변경사항 (이때 이슈 처리: fix, 컴포넌트 추가: add to 컴포넌트명, 데이터 추가: add to 데이터파일명, 적용: apply to 적용사항, 삭제: delete to 삭제사항 )
2. 날짜는 다음과 같이 처리한다. (22년 9월 5일 -> 220905)
3. dev 브랜치 : 김도현 // master 브랜치 : 한대현

# Site

https://master.dezzfcfzne8g7.amplifyapp.com/
