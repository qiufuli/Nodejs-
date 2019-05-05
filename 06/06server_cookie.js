const express = require('express');
const cookieParser = require('cookie-parser');

let server = express();
server.listen(8080);

server.use(cookieParser('fasdgfhsrtyredfbfd56te5645sdter76tytutyi456ythgfgerrhdfghfdg'));//密钥 签名用

server.get('/a', (req, res) => {
  console.log(req.cookies);//未签名的
  console.log(req.signedCookies); //签名的
  res.cookie('comunt', 998, {
    // domain:'aaa.com',
    // path:'/',
    //httpOnly: true,
    maxAge: 14 * 86400 * 1000,
    //secure: true,         //只有https
    signed: true
  })
  res.send('ok');
})

