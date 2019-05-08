var fs = require('fs');

// 創建一個可讀流
var readerStream = fs.createReadStream('input.txt');

// 創建一個可寫流
var writerStream = fs.createWriteStream('output.txt');

// 管道讀寫
// 讀取 input.txt 文件內容，並將內容寫入到 output.txt 文件中
readerStream.pipe(writerStream);

console.log('程序執行完畢。');