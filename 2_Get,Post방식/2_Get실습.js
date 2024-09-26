const http = require('http');
const url = require("url");

http.createServer((req,res)=>{
    // 1. 프론트에서 넘어온 값을 url모듈을 활용해서 객체형태로 변환
    console.log(req.url);
    let url_qs = url.parse(req.url,true).query;
    let num = Number(url_qs.num);

    // 2. 페이지에 입력한 숫자만큼 td태그를 생성해서, 사용자에게 제공 (줄 tr, 칸 td)
    res.writeHead(200, {"Content-type" : "text/html; charset=utf-8"})
    res.write("<table border='1px solid black'>")
    res.write("<tr>")
    // 반복해서 입력한 값만큼 td 생성 (for문 이용, 백틱 활용)
    for (let i = 1; i<=num; i++){
        res.write(`<td>${i}</td>`);
    }
    res.write("</tr>")
    res.write("</table>")

}).listen(3000);

// 백엔드 코드를 작성할때 순서! 매우 중요!
// 1. node는 모듈화 되어있는 프로그래밍 방식 >> 필요한걸 내가 직접 작성해야함
// 2. 코드를 작성할 때, 반드시 큰 영역부터 작성할 것. ex) 서버생성, 포트연결, 태그생성
//    순서대로 입력하는 것보다, 구조 만들기에 우선해서 입력!
// 3. 반복문이 필요한 경우, 반복하지 않은 코드부터 작성하기