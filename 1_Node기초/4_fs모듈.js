// file.system(=fs)모듈을 활용해서, 직접 작성한 글이 아닌 파일을 리턴해주자!
// 1. 보안을 신경쓰기 위해서
// 2. 코드의 유지보수, 확장성을 위해서

const http = require('http');
const fs = require('fs').promises;  // 비동기 처리를 위한 데이터를 받아오겠다!
// fs모듈은 동기/비동기방식 모두 지원하나, promises기반의 비동기 방식으로 작업이 처리됨

http.createServer ( async (req,res)=>{
    // 1. 우리가 만든 리턴.html 파일을 읽어와!
    let html = await fs.readFile("./리턴.html")
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
    res.write(html);
    res.end();
}).listen(3000)

// 비동기방식은 async(에이싱크)와 await을 이용하여 순서를 줄 수 있다!
// await는 해당 비동기 작업이 완료될 때까지 기다림