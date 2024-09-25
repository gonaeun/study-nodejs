/*
    모듈 : 필요한 기능들을 모아 놓은 조각 >> 파이썬 라이브러리
    내장모듈 : 기본적으로 설치가 되어있는 모듈
    자체제작모듈 : 내가 사용하기 편하게 직접 작성해서 활용하는 모듈
    외장모듈 : 다른 개발자가 만들어놓은 모듈을 설치해서 사용 (npm : Node Package Manager)
*/

// 변수.js에서 num1과 num2 받아오기
// 변수.js 파일 불러오기 >> 모듈을 불러올땐 require("모듈파일명")
let {num1,num2} = require("./0_변수");
console.log(num1,num2);

// Node를 실행하는 방법
// 1. ctrl + `  : 터미널 창 실행
// 2. 명령어를 통해 서버 실행
// 3. 가장 중요한 점 : 반드시 코드의 실행경로 확인하기

// ***명령어
// 1) 현재 폴더 안에 존재하는 파일의 리스트 : ls
// 2) 폴더를 변경하고 싶은 경우(Change Directory) : cd
// 3) 노드로 파일 실행 : node
//   * 그밖에  현재나의위치 ./
//            파일로 들어가겠다 ../
//            cd 입력 1 + tap키 >> cd .\1_Node기초\라고 자동완성됨 (파일명 비슷하게 여러개일땐 또 tap키)
//            한번 입력한 경로는 화살표위아래 버튼 누르면 뜸!

// 반드시 경로를 확인하고, 명령어를 확인하고, 파일명을 확인하고, 저장을 습관화하자! ★
