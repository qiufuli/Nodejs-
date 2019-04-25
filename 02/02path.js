const path = require('path');

let str = '/root/a/b/1.txt';

//path.dirname(str) 获取目录名称  /root/a/b
console.log(path.dirname(str)); 

//path.extname(str) 获取扩展名 .txt
console.log(path.extname(str));

//path.basename(str) 获取扩展名 1.txt
console.log(path.basename(str));

//path.resolve(str) 对路径的解析 类似于命令行的操纵  \root\a\b\c\d\e
console.log(path.resolve('/root/a/b','c','d','e'));
// 常用的是解析当前的绝对路径
console.log(path.resolve(__dirname,'build'));