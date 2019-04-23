const http = require('http');

// 自动帮我们创建一个服务器
let server=http.createServer(()=>{
  console.log('来了')
}) 

// 监听 端口
server.listen(8888);
