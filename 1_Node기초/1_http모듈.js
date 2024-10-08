// 실제 node로 서버를 만들기 위해서 사용하는 모듈 : http
// 로컬 서버를 제작할 때 사용된다. (서버이름 : 로컬 컴퓨터의 ip) + 포트번호
// 모듈을 불러들일 때는 const(상수)안에 저장해서 사용하자! (변하면 안되는 값이니까)
const http = require("http"); 

// 서버를 만들때 주의할 점!
// 1) 매개변수가 2개 request, response >> req(클라이언트가 넘겨준 데이터) / res(서버가 넘겨줄 데이터)
// 2) listen("포트번호") >> 서버의 주소를 구별하기 위해서
// 3) 코드를 수정하거나, 서버를 끄고싶다면 >> 터미널에서 CTRL + C 입력
http.createServer((req,res)=>{
    console.log("누군가가 접속했어요!")
}).listen(3000)

// cmd 접속 >> ipconfig 입력해서 IPv4주소 체크 >> 크롬에서 접속 : IPv4주소 + :3000(포트) 입력
// 접속됨 >> VS의 터미널에서 "누군가가 접속했어요!" 보여짐
// 서버 끄고 나가자! (안그러면 계속 서버 돌아감)


// 관습적으로 - node.js에서는 포트번호 3000번 주로 씀
// 포트 충돌 방지 - 한 컴퓨터에서 여러 서버를 동시에 실행하려면, 각 서버가 다른 포트번호를 사용해야함