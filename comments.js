// Create web server with Node.js
// http://localhost:8080/comments
// http://localhost:8080/comments?name=Bob

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.name ? q.name + ' comment' : 'comment';
  res.end(txt);
}).listen(8080);
console.log('Server running at http://localhost:8080/');