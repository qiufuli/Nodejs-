const http = require('http');
const querystring = require('querystring'); // 获取url参数对象的模块 

const url = require('url'); //这个模块是专门处理url的 这个更简单方便

// 其实想接收浏览器的GET数据 就是在url中 get是拼接到url地址后面的
let server = http.createServer((req,res)=>{
  console.log(req.url); //  /aaa?username=11111&password=22222
  // let [url,query] = req.url.split('?');
  // console.log('url',url);
  // console.log('query',query);
  // let get = querystring.parse(query);
  // console.log('get',get);

  let {pathname,query} = url.parse(req.url,true);
  console.log('pathname',pathname);
  console.log('query',query);
})
server.listen(8080);