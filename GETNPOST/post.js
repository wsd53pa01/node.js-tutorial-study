var http = require('http');
var querystring = require('querystring');

var postHTML =  
'<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
'<body>' +
'<form method="post">' +
'网站名： <input name="name"><br>' +
'网站 URL： <input name="url"><br>' +
'<input type="submit">' +
'</form>' +
'</body></html>';

http.createServer(function(req, res){
    var body = "";
    req.on('data', function(chuck){
        body += chuck;
    });

    req.on('end', function(){
        // 解析參數
        body = querystring.parse(body);
        // 設置響應頭部信息及編碼
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf8'});

        if(body.name && body.url){ // 輸出提交的數據
            res.write("網站名 : " + body.name);
            res.write("<br>");
            res.write("網站 URL: " + body.url);
        } else { // 輸出表單
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);