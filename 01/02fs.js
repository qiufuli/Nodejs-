const fs = require('fs');

// 属于异步操作 不会耽误其他的执行  
// fs.writeFile(path,data,callback);
// fs.readFile(path,callback);
// 同步形式也有 很少用  太慢了
// fs.writeFileSync();
// fs.readFileSync();

fs.writeFile('./a.txt','xxasxssx',(err)=>{
  if(err){
    console.log('写入失败',err);

  }else{
    console.log('写入成功',err);
  }
});

// data返回的是原始的二进制数据(Buffer) 浏览器是可以解析的 只是你自己看的时候看不懂
fs.readFile('./a.txt',(err,data)=>{
  if(err){
    console.log('读取失败',err);
  }else{
    console.log('读取成功',data.toString());
  }
})