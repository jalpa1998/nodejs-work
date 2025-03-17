
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
    var sql="select sum(salary) as sum_of_salary,department from tbl_employees group by department"; //
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
