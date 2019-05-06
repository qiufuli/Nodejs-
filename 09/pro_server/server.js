const Koa = require('koa');
const Router = require('koa-router');
const static = require('./routers/static');
const body = require('koa-better-body');
const path = require('path');
const session=require('koa-session');
const fs=require('fs');
const ejs=require('koa-ejs');
const config = require('./config');

let server = new Koa();
server.listen(config.PORT);
console.log(`server running at ${config.PORT}`);

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

// 常用的东西 可以绑定到这里
server.context.config = config;
let router = new Router();
// router.all('*',async (ctx)=>{
//   console.log('router');
//   ctx.body = '进入了'
// })

// server.use(async (ctx,next)=>{
//   console.log('server');
//   await next(); 
// })

//渲染
ejs(server, {
  root: path.resolve(__dirname, 'template'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: false
});

router.use('/admin',require('./routers/admin'));
router.use('/',require('./routers/www'));


static(router);

server.use(router.routes());

