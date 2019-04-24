const fs = require('fs');

```js
// 同步形式也有 很少用  太慢了
// fs.writeFileSync();
// fs.readFileSync();

// 属于异步操作 不会耽误其他的执行  
fs.writeFile(path,data,callback); //写入文件 路径，要写入的数据，回调函数 （接受一个err参数 ）

//写入一旦成功 即使没有这个文件 也会在目录中创建这个文件 并把数据写入到文件中 回调中的 err 返回为 null

// 写入失败 回调中的err会返回一个错误对象 

fs.readFile(path,callback); // 用来读文件 不需要data 路径，回调函数(接受err,data参数  data是读取到的数据）

 //data返回的是原始的二进制数据(Buffer) 浏览器是可以解析的 只是你自己看的时候看不懂
``` 