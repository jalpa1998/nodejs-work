
var http=require('http');
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
res.end('Just prnt content on web page using local server')


}).listen(8181);
console.log('server is running http://localhost:8181/')
