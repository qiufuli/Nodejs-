const Router = require('koa-router');

let router = new Router();

router.get('/login',async (ctx)=>{
//  await ctx.db.query(`SELECT * FROM user_table`, (err, data)=>{
//     if(err){
//       console.log('错了', err);
//     }else{
//       console.log('success',data);
//     }
//   });


  // ctx.body = 'aaa';
  let data = await ctx.db.query(`SELECT * FROM user_table`);
  ctx.body = data;
})

module.exports = router.routes();