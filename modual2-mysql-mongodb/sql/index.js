var express=require("express");
var app=express();
//check connect mysql2
var mysql2=require('mysql2');
var con=mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"crudapp"

});
//chack connection via condition
con.connect(function(err){
    if(err)
     { 
        throw err;
    }
    else
    {
        console.log ('connected sucessfully')
    }

});

app.listen(7000);

console.log('http:/localhost:7000');