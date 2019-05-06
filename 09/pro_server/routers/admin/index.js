const Router = require('koa-router');
const fs = require('await-fs');
const path = require('path');
let router = new Router();

router.get('/login',async (ctx)=>{
  await ctx.render('/admin/login',{
    HTTP_ROOT:ctx.config.HTTP_ROOT,
    errmsg: '11111'
  })
})

router.post('/login',async (ctx)=>{
  console.log(ctx.request);
  console.log(ctx.request.fields);
  console.log(ctx.request.query);
  let admin = JSON.parse((await fs.readFile(path.resolve(__dirname,'../../admins.json'))).toString())
  ctx.body = admin;
})

module.exports = router.routes();