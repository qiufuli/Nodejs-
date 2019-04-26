const http = require('http');

http.createServer((req,res)=>{
  // 允许所有源访问 跨域
  res.setHeader('access-control-allow-origin','*');
  res.write('{"a":"blue","b":25}');
  res.end();
}).listen(8080);