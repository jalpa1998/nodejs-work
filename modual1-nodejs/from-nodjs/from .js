
var http=require('http');
http.createServer(function(req,res)
{
    // 404 response denied
    // 200 response granted 
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(`<form>
    <label>FirtsName :</label> <input type="text" name="fnm" placeholder="firstname" /> 
    <br /> 
    <label>LastName :</label> <input type="text" name="fnm" placeholder="firstname" /> 
    <br />
    <label>Gender :</label> <input type="text" name="fnm" placeholder="firstname" /> 
    <br />

    <label>phone :</label> <input type="number" name="fnm" placeholder="Phone" /> 
    <br />

    <label>Country :</label> <input type="text" name="fnm" placeholder="India" /> 
    <br />
    
     <input type="submit" value="Send"  /> 
        
        
    </form>`);

}).listen(8000);
// console.log('Server running at http://127.0.0.1:3000/'); 
// http://localhost:8181/
// console.log('Server running at http://127.0.0.1:8080/'); 
console.log('Server running at http://localhost:8000/'); 
