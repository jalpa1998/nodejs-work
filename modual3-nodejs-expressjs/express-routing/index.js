
var express=require("express");
var app=express();
//var app=express();
var test=require('./test.js');
module.exports=test;
app.use('/test',test);
app.listen(3000);
console.log('the server started http://localhost:3000');

