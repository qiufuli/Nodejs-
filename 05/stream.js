const fs = require('fs');

// fs.createReadStream(); //读取流
// fs.createWriteStream(); //写入流

let rs = fs.createReadStream('1.txt');
let ws = fs.createWriteStream('2.txt');

rs.pipe(ws);

rs.on('error', err=>{
  console.log(err);
});
 
ws.on('finish', ()=>{
  console.log('完成');
});
