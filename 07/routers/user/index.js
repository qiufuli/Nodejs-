const Router = require('koa-router');

let router = new Router();

router.get('/',async (ctx) =>{
  ctx.body = '用户'
})

router.use('/admin',require('./admin'));
router.use('/company',require('./company'));

module.exports = router.routes();