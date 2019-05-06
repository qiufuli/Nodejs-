const Koa = require('koa');
const Router = require('koa-router');
const static = require('./routers/static');
const body = require('koa-better-body');
const path = require('path');
const session=require('koa-session');
const fs=require('fs');

let server = new Koa();
server.listen(8080);

//中间件 koa-better-body
server.use(body({
  uploadDir: path.resolve(__dirname,'./static/upload')
}));

//中间件 session 需要配置key 
server.keys = fs.readFileSync('.keys').toString().split('\n');
server.use(session({
  maxAge:20*60*1000,
  renew:true // 自动续期
},server))


//数据库
server.context.db = require('./libs/database');
let router = new Router();
// router.all('*',async (ctx)=>{
//   console.log('router');
//   ctx.body = '进入了'
// })

// server.use(async (ctx,next)=>{
//   console.log('server');
//   await next(); 
// })

router.use('/admin',require('./routers/admin'));
router.use('/',require('./routers/www'));


static(router);

server.use(router.routes());

