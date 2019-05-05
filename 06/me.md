#### express框架

##### 安装
  ```js
  npm init -y

  npm i express -D

  ```

##### 初始化

  ```js
  
  const express = require('express');

  let server = express();//相当于 http.createServer()
  server.listen(8080);
  ```

##### 中间件 

  ```js
  // express 提供的中间件  可以访问访问静态文件的 用的时候放到代码的最后
  server.use(express.static('./static/'));
  ```
  ```js
  //get请求 req里会带一些参数方便你用  比如query 获取get参数
  server.get('/a', (req, res, next)=>{
    console.log(req.query);
    res.send(req.query);
  }); 
  ```
  body-parser 处理post参数
  npm i body-parser -D

  ```js
  //引入 body-parser
  const body = require('body-parser');

  // 在路由之前添加好需要的中间件 代码从上至下执行  所以在用之前先调用
  server.use(body.urlencoded({
    extended:false //是否开启扩展模式  不配置参数的话 会有个警告提示
  }));


  server.post('/reg', (req, res)=>{
    // req上会多一个body 属性
    console.log(req.body);//{ user: '1111', pass: '22222' }
  });

  ```

  multer 上传文件 一般配合body-parser使用
  npm i multer -D
  ```js
  const multer = require('multer');

  // dest 上传到哪个位置
  let obj = multer({dest:'./static/upload'})

  //  obj 会有一个默认限制 比如 多少KB 什么格式之类的  any 是不做任何限制
  server.use(obj.any());
  
  //处理
  server.post('/reg', (req, res)=>{
    // req上会多一个files 属性
    console.log(req.files);
  });

  ```

  cookie-parser
  npm i cookie-parser -D

  ```js
  const cookieParser=require('cookie-parser');
  
  server.use(cookieParser());

  server.get('/a', (req, res)=>{
  console.log(req.cookies);
  //
  /*res.cookie('amount', 99.8, {
    //domain: 'aaa.com',
    //path: '/',
    maxAge: 14*86400*1000
  });*/
    res.send('ok');
  });

  ```

  cookie-session
  npm i cookie-session -D