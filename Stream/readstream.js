var fs = require("fs");
var data = '';

// 宣告read stream
var readerStream = fs.createReadStream('input.txt');

// 設定編碼為 UTF-8
readerStream.setEncoding('UTF8');

// 處理stream event --> data, end, and, error
readerStream.on('data', function(chuck){
    data += chuck;
});

readerStream.on('end', function() {
    console.log(data);
});

readerStream.on('error', function(err){
    console.log(err.stack);
});

console.log('程序執行完畢')