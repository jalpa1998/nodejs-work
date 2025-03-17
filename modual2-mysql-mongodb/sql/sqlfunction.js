
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
    /* sql function a) aggrigate function
                       
                           1)sum 2)avg 3)min 4)max 5) count

        b) scalar functions
                           1)lcase  2) ucase 3)first 4)last 
    */
    
   
    var sql="select ucase(name) from tbl_employees"; //
    con.query(sql,function(err,result){

        if(err) 
        {
          throw err;
        }
        else 
        {
          console.log('Table fetched data  successfully');
          console.log(result);
        }

    });

   }
  
});

app.listen(7000);
console.log('http://localhost:7000');
