
var http=require('http');
var datetime=require('/currentDate');
http.createServer(function(req,res)
{

    // 404 response denied
    // 200 response granted 
    res.writeHead(200,{'Content-Type':'text/html'});
    // res.end('Hello i am Brijesh just check server');
    res.write("The date and time of systems is :"+datetime.ourDatetime());
    res.end();

}).listen(8080);
// console.log('Server running at http://127.0.0.1:3000/'); 
// http://localhost:8181/

// console.log('Server running at http://127.0.0.1:8080/'); 

console.log('Server running at http://localhost:8080/'); 