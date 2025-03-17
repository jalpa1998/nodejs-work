
var express=require("express");
var app=express(); 
// check connect of mysql2 
var mysql2=require('mysql2'); 
var con=mysql2.createConnection({
    host:"localhost", 
    user:"root", 
    password:"root", 
    database:"restapidb"
});
// check connection via conditions 
con.connect(function(err){
  if(err)
    { 
        throw err;
    }
   else 
   {
    console.log('connected successfully');
    // create a table con.query();
    // var sql="create table tbl_contacts(id int AUTO_INCREMENT PRIMARY KEY, name varchar(255), email varchar(255), mobile bigInt, subject varchar(255),message text)";
    // var sql="create table tbl_country(cid int AUTO_INCREMENT PRIMARY KEY, countryname varchar(255))";

    var sql="create table tbl_customers(customerid int AUTO_INCREMENT PRIMARY KEY, name varchar(255), age int, cid int references tbl_country(cid))";

    con.query(sql,function(err,result){

        if(err) 
        {
          throw err;
        }
        else 
        {
          console.log('Table successfully  created');
        }

    });

   }
  
});

app.listen(7000);
console.log('http://localhost:7000');
