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
    // var sql="delete from tbl_contacts"; // all data delete
    // var sql="delete from tbl_contacts where id=1"; // deleted one rows
    // var sql="delete from tbl_contacts where id in(1,2,3,5)"; // deleted one rows
    // var sql="delete from tbl_contacts where id between 1 and 20"; // deleted between rows
    var sql="delete from tbl_contacts where id in(1,2,3,5)"; // deleted one rows
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