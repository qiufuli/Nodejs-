const koa = require('koa');
const Router = require('koa-router');

let server = new koa();
server.listen(8080);

let router = new Router();

// router.get('/news/:id/',async (ctx)=>{
//   console.log(ctx);
//   console.log(ctx.params);
// })

router.get('/login',async (ctx)=>{
  // if(!ctx.query.user || !ctx.query.pass){
  //   ctx.throw(400,'用户名密码是必填的')
  // }else{
  //   ctx.body = 'success'
  // }

  ctx.assert(ctx.query.user, 400, '用户名是必填的')
  ctx.assert(ctx.query.pass, 400, '密码是必填的')
  ctx.body = 'success'
})

server.use(router.routes())