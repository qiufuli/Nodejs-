#### 使用koa

```js
const koa = require('koa');

// koa 创建服务需要 用 new 关键字
let server = new koa();
server.listen(8080);


//express 写法
server.get('/a',(req,res,next){}) // express可以这样写 koa
server.post('/a',(req,res,next){}) // express可以这样写 koa

//koa写法
const Router = require('koa-router');
//server.get('/a')  //这种是不可以直接使用的
let router = new Router();
server.use(router.routes()); //规定写法
// ctx 参数不是 req res  是一个上下文对象
router.get('/a',async (ctx,next)=>{
})



//express 写法
server.get('/a',(req,res)=>{
  res.send();//输出
})
//koa写法
router.get('/a',async (ctx,next)=>{
ctx.body = 'xxxxx' ;//输出 相当于 express 的 res.send()
})


```

ctx.params 获取 /news/:id/:name 中 id和name的参数对象
ctx.query  获取/news?a=1&b=2 中 a和b对的参数对象
ctx.method  请求方法
ctx.url    请求路径 url地址
ctx.path   请求路径 不带参的那种
ctx.headers     请求头
ctx.ip          客户端的IP

server.context：相当于ctx的prototype 需要什么可以先加到里面


ctx.request 一般用不到
ctx.response


ctx.throw(code, msg)
ctx.assert(条件, code, msg)

ctx.state=305;
ctx.redirect();重定向
ctx.attachment(); 下载一个文件


中间件
  koa-static 静态文件

  koa-better-body  ctx.request.fields 获取文件 post都行

  cookie是自带的
 
 koa-session