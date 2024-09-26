const http = require('http');

// 서버 만들기. 포트번호도 지정
http.createServer((req, res)=>{
    //req(클라이언트/400대/프론트코드), res(서버/500대)
    //사용자가 서버에 접속하면<h1>태그로 접속을 환영합니다!
    // 1. 헤드 정보에 한글 인코딩 

    // *응답코드 200, 400, 500
    // - 200 : 통신에 성공
    // - 400, 500 : 통신에 실패 >> 400(req, 클라이언트, 프론트엔드) /  500(res, 서버, 백엔드)

    res.writeHead(200,{"Content-Type" : "text/html; charset=utf-8"})

    res.write("<h1>접속을 환영합니다</h1>")
    res.write("<h2>접속을 환영합니다</h2>")
    res.write("<h3>접속을 환영합니다</h3>")
    res.write("<h4>접속을 환영합니다</h4>")
    res.write("<h5>접속을 환영합니다</h5>")

    let html = `
        <h1>반가워요!</h1>
        <h2>반가워요!</h2>
        <h3>반가워요!</h3>
        <h4>반가워요!</h4>
        <h5>반가워요!</h5>
    ` 
    res.write(html);       
    res.end;

    // 서버를 생성하고 응답할 때 주의점!
    // 1. 한글을 지원하려면, 반드시 인코딩해주기 >> writeHead
    // 2. 응답이 끝나면 반드시 end() 사용 >> 서버 주소창 옆에 보이는 무한로딩 해결

}).listen(3000)