var http = require('http');

var handleRequest = (req, res) => {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World!');
};

var www = http.createServer(handleRequest);

www.listen(8080);
