
var http=require('http');
http.createServer(function(req,res)
{

    // 404 response denied
    // 200 response granted 
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello i am Brijesh just check server');


}).listen(8080);
// console.log('Server running at http://127.0.0.1:3000/'); 
// http://localhost:8181/

// console.log('Server running at http://127.0.0.1:8080/'); 

console.log('Server running at http://localhost:8080/'); 
