# interactive-web
웹페이지가 반응해

## Idea
- [x] 공통 블로그(포트폴리오) OK?
- [x] https://www.youtube.com/watch?v=cpEeqACsF_Q

## 공통 주제(4개 다 하고, 순서를 정해서 먼저 한다)
1. 돌아가는 카드
2. 이두희
3. 양(현지)
4. surf forecast

## react 설치 및 프로젝트 생성
[참고링크](https://www.hanumoka.net/2019/12/28/ubuntu-20191228-ubuntu-create-react-app/)(우분투용)

순서 : NVM, node, npm 설치, create react app 설치(react 개발 툴)

NVM 설치
```
curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh -o install_nvm.sh
다운로드 후
bash install_nvm.sh
실행하면 자동으로 export로 환경변수 설정
source ~/.profile
환경변수 유지
```
node 설치
```
nvm ls-remote
명령어를 치면 Latest LTS 버전 또는 원하는 버전을 확인하여
nvm install 14.15.3
```
Create react app 설치
```
npm install -g create-react-app
create-react-app test-react-project
cd test-react-project
```
실행
```
yarn start
```
나는 빈 깃팟의 워크스페이스에서 시작하여 install 진행.
yarn start를 하면 오른쪽에 프리뷰가 뜨면서 포트를 자동으로 열어줌.

function 부르기 예제 [참고링크](https://dev-pengun.tistory.com/entry/React-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EC%B4%88-%EB%B0%B0%EC%9A%B0%EA%B8%B0-3-components%EC%99%80-props?category=913270)

