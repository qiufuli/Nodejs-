node基本上就是考验你模块的使用

```js
http:
  require('http');

// request:获取客户端发送的请求数据的信息(请求的地址，请求的方式等)
// response:返给客户端的相应数据

 let server = createServer(function(req,res){
   res.write('aaa');
   res.end();//结束下你的请求
  
 })

 server.listen(8080)

```
