const express = require('express');
const cookieSession = require('cookie-session');
let server = express();
server.listen(8080);

server.use(cookieSession({
  keys: ['asdfwqw4r4r343fdgsdfg', 'safdas454trgtrthdfthd', 'dfsdfgdfyrt6u6t7yit7u'],
  maxAge: 20*60*1000      //20分钟
}));

server.get('/a', (req, res) => {
  console.log(req.session);
  if(!req.session['view']){
    req.session['view'] = 1;
  }else{
    req.session['view']++;
  }
  res.send(`${req.session['view']}`)
})

