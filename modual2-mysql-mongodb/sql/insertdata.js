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
    // var sql="insert into tbl_contacts values (null,'brijesh','brijesh@gmail.com',9998003879,'24x7 customer support','just contact me')";
    // var sql="insert into tbl_employees values (null,'brijesh',15000,'IT','rjt',9998003879),(null,'sameer',18000,'IT','rjt',9998003877),(null,'disha',19000,'IT','rjt',99980038980),(null,'isha',29000,'CSE','rjt',9998003874),(null,'jalpa',35000,'CSE','rjt',9998003879)";


    // var sql="insert into tbl_country values (null,'india'),(null,'usa'),(null,'srilanka'),(null,'ukrain')";

    
    var sql="insert into tbl_customers values (null,'sameer',25,1),(null,'brijesh',35,1),(null,'disha',24,2),(null,'isha',25,3),(null,'jalpa',26,4)";

    con.query(sql,function(err,result){

        if(err) 
        {
          throw err;
        }
        else 
        {
          console.log('Table data inserted successfully');
        }

    });

   }
  
});

app.listen(7000);
console.log('http://localhost:7000');