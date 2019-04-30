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