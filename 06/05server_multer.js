const express=require('express');
const body = require('body-parser');
const multer = require('multer');

let server=express();
server.listen(8080);

let obj = multer({dest:'./static/upload'})

server.use(obj.any());



// 在路由之前添加好需要的中间件 代码从上至下 执行 
server.use(body.urlencoded({
  extended:false //是否开启扩展模式 
}));

//
server.post('/reg', (req, res)=>{
  // req上会多一个files 属性
  console.log(req.files);
});
