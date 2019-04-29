const express=require('express');

let server=express();
server.listen(8080);

//
server.get('/a', (req, res, next)=>{
  res.send('aaa');
});
server.get('/b', (req, res, next)=>{
  res.send('bbb');
});

// express 提供的中间件  可以访问访问静态文件的 用的时候放到代码的最后
server.use(express.static('./static/'));