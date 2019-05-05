const Koa=require('koa');
const ejs=require('koa-ejs');
const path=require('path');

let server=new Koa();
server.listen(8080);

//
ejs(server, {
  root: path.resolve(__dirname, 'render/template'), //目录
  layout: false, //默认布局
  viewExt: 'ejs', //文件后缀名
  cache: false,
  debug: false
});

//ctx.render
server.use(async ctx=>{
  await ctx.render('2', {
    arr: [12, 5, 8, 99, 37]
  })
});
