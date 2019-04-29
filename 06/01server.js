const express = require('express');

let server  = express(); //相当于 http.createServer()
server.listen(8080);

// express 自带路由

server.get('/a',(req,res,next)=>{
  // res.send(req.url); //什么都能发  相比res.write
  console.log(req.url);
  next(); // 一旦 res.send()之后调用会报错的

})


server.get('/a',(req,res,next)=>{
  console.log('aaaa');

  res.send('next过来的'); //什么都能发  相比res.write
})