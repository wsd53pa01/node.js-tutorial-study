var fs = require('fs');
var zlib = require('zlib');

// 解壓縮 input.txt.gz 文件為 input.txt
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input.txt'));

console.log('文件壓縮完成。');