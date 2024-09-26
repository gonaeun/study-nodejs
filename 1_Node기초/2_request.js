// 접속한 사용자의 ip 체크

const http = require('http');
const userip = require('request-ip');

// 서버 만들기
http.createServer((req,res)=>{
    // req 역할 파악 : 클라이언트가 넘겨준 정보를 담고 있는 공간 (접속시간, 접속장소, ip, 데이터)
    // 사용자의 접속 ip 확인 (request-ip가 도와줄거야)
    let ip = userip.getClientIp(req);
    // 터미널  ::ffff:192.168.21.48  ::ffff:192.168.20.40 이런식으로 접속ip 뜸
    let req_ip = ip.substring(7)
    // ip앞에 붙어있는 불필요한 ::ffff: 제외하고 출력하고 싶음 >> substring(7) : 0~6까지의 문자를 제외한 나머지 부분 반환됨 (편하게 쓰라고 알려준거임!)
    
    // 실습 : 조건문 활용
    // 1. 내 짝꿍의 컴퓨터가 접속하면, console.log("짝꿍님 환영합니다!")
    // 2. 그 외 다른사람이 접속하면, console.log("다른사람은 나가세요")
    // ip를 조회할 때는, ip모듈과 req를 활용한다!
    // 조건문 입력한 후에는 >> 저장 >> 서버 실행 끊고 (서버끊기 ctrl+c) >> 다시 접속해줘야함! 

    // console.log(ip);
    // console.log(req_ip);
    if (req_ip === "192.168.20.40"){
        console.log("짝꿍님 환영합니다!");
    }else{
        console.log("다른사람은 나가세요");
    }
    }).listen(3000);
