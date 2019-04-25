const http = require('http');

http.createServer(function(req,res){
  let arr = [];
  req.on('data',(buffer)=>{
    arr.push(buffer)
  });
  req.on('end',()=>{
    let buffer = Buffer.concat(arr);
    console.log(buffer.toString());
  })
}).listen(8080);