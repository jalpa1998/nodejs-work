
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
    // var sql="select * from tbl_contacts"; // all data selected
    // var sql="select name,email,mobile,subject from tbl_contacts"; //select particulars column name
    // var sql="select * from tbl_contacts where name='brijesh'"; // select one data 
    // var sql="select * from tbl_contacts where id limit 5"; // select with limit
    // var sql="select  from tbl_contacts where id in(1,3,5)"; // deleted one rows
    //var sql="select  from tbl_contacts where id between 1 and 1000"; // deleted one rows

    con.query(sql,function(err,result){

        if(err) 
        {
          throw err;
        }
        else 
        {
          console.log('Table deleted successfully');
        }

    });

   }
  
});

app.listen(7000);
console.log('http://localhost:7000');
