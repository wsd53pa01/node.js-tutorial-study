var fs = require('fs');
var data = '菜鸟教程官网地址：www.runoob.com';

// 新增一個可以寫入的 stream，寫入到文件 output.txt 中
var writeStream = fs.createWriteStream('output.txt');

// 使用 utf-8 編碼寫入數據
writeStream.write(data, 'UTF8');

// 標記文件結束
writeStream.end(); 

// 處理流事件 --> data, end, and error
writeStream.on('finish', function(){
    console.log('寫入完成。');
});

writeStream.on('error', function(err){
    console.log(err.stack);
})

console.log('程序執行完畢。');