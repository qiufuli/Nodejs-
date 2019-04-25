const http = require('http');
const url = require('url'); // 处理url
const querystring = require('querystring'); // 处理参数 query
const fs = require('fs');


let users = {
  'blue': '123456'
};

http.createServer((req, res) => {
  let path = '', get = {}, post = {};
  if (req.method == 'GET') {
    let { pathname, query } = url.parse(req.url,true);

    path = pathname;
    get = query;

    complete();
  } else if (req.method == 'POST') {
    path = req.url; //因为是post url没有别的数据
    let arr = [];
    req.on('data', buffer => {
      arr.push(buffer);
    })
    req.on('end', () => {
      let buffer = Buffer.concat(arr);
      post = querystring.parse(buffer.toString());

      complete();
    })
  }
  function complete() {
    console.log(path, get, post);
    if (path == '/reg') {
      let { username, password } = get;
      console.log('users',users)
      if (users[username]) {
        res.write(JSON.stringify({ error: 1, msg: '此用户已存在' }))
        res.end();
      } else {
        users[username] = password;
        res.write(JSON.stringify({ error: 0, msg: '注册成功' }));
        res.end();
      }
    } else if (path == '/login') {
      let { username, password } = get;


      if (!users[username]) {
        res.write(JSON.stringify({ error: 1, msg: '找不到该用户' }))
        res.end();
      } else if (users[username] == password) {
        res.write(JSON.stringify({ error: 0, msg: '登录成功' }));
        res.end();
      } else {
        res.write(JSON.stringify({ error: 1, msg: '密码错误' }));
        res.end();
      }
    } else {
      fs.readFile(`www${req.url}`, (err, buffer) => {
        if (err) {
          res.writeHeader(404);
          res.write('Not Found');
          res.end();
        } else {
          res.write(buffer);
          res.end();
        }
      })
    }
  }
}).listen(8080)