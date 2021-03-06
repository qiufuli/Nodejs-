const Koa=require('koa');
const Router=require('koa-router');
const static=require('./routers/static');
const body=require('koa-better-body');
const path=require('path');
const session=require('koa-session');
const fs=require('fs');
const ejs=require('koa-ejs');

let server=new Koa();
server.listen(8080);

//中间件
server.use(body({
  uploadDir: path.resolve(__dirname, './static/upload')
}));

server.keys=fs.readFileSync('.keys').toString().split('\n');
server.use(session({
  maxAge: 20*60*1000,
  renew: true //自动续期
}, server));  //server参数别忘了

//数据库 连接
server.context.db=require('./libs/database');

//渲染
ejs(server, {
  root: path.resolve(__dirname, 'template'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: false
});

//路由和static
let router=new Router();

//统一处理
/*router.use(async (ctx, next)=>{
  try{
    await next();
  }catch(e){
    ctx.throw(500, 'Internal Server Error');

    console.log(e);
  }
});*/


router.use('/admin', require('./routers/admin'));
router.use('/api', require('./routers/api'));
router.use('', require('./routers/www'));
static(router);

server.use(router.routes());
