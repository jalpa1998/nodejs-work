
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
    // var sql="create table tbl_users  (id int, name varchar(255), address text, mobile bigInt)";
    var sql="create table tbl_employees(id int auto_increment primary key, name varchar(255), salary int, department varchar(255), address text, mobile bigInt)";

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
    // var sql="create table tbl_users  (id int, name varchar(255), address text, mobile bigInt)";
    var sql="create table tbl_employees(id int auto_increment primary key, name varchar(255), salary int, department varchar(255), address text, mobile bigInt)";

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
