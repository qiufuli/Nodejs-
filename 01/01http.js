const http = require('http');
const fs = require('fs');

// 自动帮我们创建一个服务器
let server=http.createServer((req,res)=>{
  // console.log(req.url)
  // res.write('aaa');
  // res.end();

  fs.readFile(`www${req.url}`,(err,buffer)=>{
    if(err){
      res.writeHeader(404);//浏览器真正看的是这个
      res.write('Not Found'); //这个是显示给用户看的
      res.end();

    }else{
      res.write(buffer);
      res.end();
    }
  })
}) 

// 监听 端口
server.listen(8080);
