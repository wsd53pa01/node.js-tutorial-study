var http = require('http');

http.createServer(function (request, response){
      // 發送 HTTP Head
      // Http State Value : 200 : OK
      // content type: text/plain

      response.writeHead(200, {'Content-Type': 'text/plain'});

      // response value : "Hello World"
      response.end('Hello Worold\n');
}).listen(8888);

// terminal print the message
console.log('Server runnging at http://127.0.0.1:8888/')