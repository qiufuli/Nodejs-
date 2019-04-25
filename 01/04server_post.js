const http = require('http');

const url = require('url'); //这个模块是专门处理url的 这个更简单方便

const querystring = require('querystring');

// 其实想接收浏览器的GET数据 就是在url中 get是拼接到url地址后面的
let server = http.createServer((req,res)=>{
  let arr = []
  req.on('data',buffer =>{
    arr.push(buffer);
  });
  req.on('end',()=>{
    let buffer = Buffer.concat(arr);
    let post = querystring.parse(buffer.toString());
    console.log('post',post);
  });
})
server.listen(8080);