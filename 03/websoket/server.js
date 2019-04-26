const http = require('http');
const io = require('socket.io');

// http
let server = http.createServer((req,res)=>{})
server.listen(8080);

// ws
let weServer = io.listen(server);

weServer.on('connection',sock=>{
  // sock.emit('name',数据) 发送
  // sock.on('name',function(数据){}) 接收

  // sock.on('aaa',function(a,b){
  //   console.log(a,b,a+b);
  // })
  setInterval(()=>{
    sock.emit('timer',new Date().getTime());
  },1000)

})