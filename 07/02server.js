const koa = require('koa');
const Router = require('koa-router');

let server = new koa();
server.listen(8080);

let router = new Router();

// router.get('/news/:id/',async (ctx)=>{
//   console.log(ctx);
//   console.log(ctx.params);
// })

router.get('/news',async (ctx)=>{
  console.log(ctx.query);
  ctx.body = ctx.query
})

server.use(router.routes())