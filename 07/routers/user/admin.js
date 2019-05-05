const Router = require('koa-router');

let router = new Router();

router.get('/a',async (ctx)=>{
  ctx.body= 'admin用户'
})

module.exports = router.routes();