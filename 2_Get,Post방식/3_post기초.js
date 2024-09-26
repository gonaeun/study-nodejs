const http = require('http');
// qs 모듈 : post방식에서 데이터를 변형하는 모듈
const qs = require("querystring");

http.createServer((req,res)=>{
    console.log(req.url);
    // post방식은 url에 데이터를 보내지 않기 때문에, 조회 불가능
    // post방식으로 데이터를 받아 올 때는, 2개 영역이 필요 (데이터를 처리하는 영역, 처리된 데이터를 활용한 영역)
    // 1. 데이터를 받아 올 때!
    let body = "";
    req.on("data",(data)=>{
        // post 데이터는 반드시 문자형태로 변환하는 작업이 필수!
        // get데이터는 하지 않는 이유 : url에서 처음부터 문자형태로 담겨서 넘어온다.
        console.log("post로 받아온 데이터", data);
        // 터미널 : post로 받아온 데이터 <Buffer 69 64 3d 69 64 26 70 77 3d 70 77>

        // post로 받아온 데이터는 Buffer형태로 출력이 된다 >> String 타입으로 변형해줘야함!
        // post를 처리할땐, 데이터를 body에 담아주세요(개발자들끼리 약속)
        body = data.toString();
        console.log("문자로 변환된 데이터", body);
        // 터미널 :  문자로 변환된 데이터 id=id&pw=pw
    })

    // 2. 문자로 변형된 데이터를 처리하는 로직
    req.on("end",()=>{
        // 문자 데이터를 객체형태로 변환하는 작업 >> querystring 모듈 활용 (맨윗줄 가서 모듈 불러와주자!)
        let parse_data = qs.parse(body);
        // 모듈 이름자체가 query라서 query true어쩌구 안적어줘도 되네. get 방식과 쓰는게 다르지만 구조는 같아! >> 해결책 : express 프레임모드
        console.log("객체로 변형된 데이터", parse_data);
        // 실습!
        // 사용자에게 h1태그로 "당신의 아이디는 ??? 입니다, 비밀번호는 ??? 입니다" 출력해주기
        res.writeHead(200, {"Content-type" : "text/html; charset=utf-8"});
        res.write(`<h1>당신의 id는 ${parse_data.id}입니다. 비밀번호는 ${parse_data.pw}입니다</br>`)
        res.end();
    })
}).listen(3000)