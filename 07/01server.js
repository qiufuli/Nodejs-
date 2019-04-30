const koa = require('koa');
const Router = require('koa-router');
// koa 创建服务需要 用 new 关键字
let server = new koa();
server.listen(8080);

//koa不带路由
//server.get('/a')  //这种是不可以直接使用的
let router = new Router();

// ctx 参数不是 req res  是一个上下文对象
router.get('/a',async (ctx)=>{
  ctx.body = 'aaaa';
})

server.use(router.routes());