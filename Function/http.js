var http = require('http');

http.createServer(function(require, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
}).listen(8888);

/*
var http = require('http');

function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
}
*/ 