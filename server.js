// 서버 띄우기 위한 기본 세팅 (express 라이브러리)

const express = require('express');
const app = express();

app.listen(8080, function(){        // listen(서버 띄울 포트번호, 띄운 후 실행할 코드)
    console.log('listening on 8080')
});


// dir 주소로 연결
app.get('/TodoList', function(req, res){
    //res.send('반갑습니다.');
    res.sendFile(__dirname + '/ToDoList.html')
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html')
});