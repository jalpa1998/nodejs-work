const express=require("express");
const mysql=require("mysql2");
// body-parser is a module or middleware of node js i.e used to post data from users form on server via body-parser
const bodyParser=require("body-parser");
`const path=require('path');`
// node js provides flash-session messages anywhere n your UI
const session=require('express-session');
const flash=require('connect-flash');

// create express port server
const app=express();
const port=3000;
// create a middleware to post data via form on node server 
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(session({

    secret:'secret', //pass a secret key 
    resave:false, 
    saveUninitialized:true

}));
app.use(flash());

// send flash message using express-session in ejs templates
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// used express.static('public') to load css | js | images | fonts
app.use(express.static('public'));

// set mysql2 database connection ....
const db=mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'admin',
    database:'node_crud_app'

});

// check messages for connection 
db.connect((err)=>{
   if(err) throw err;
   console.log('connections  successfully');     
});


// create a new users here 
app.get('/create',function(req,res){
    res.render('create',{
        message:req.flash('message')
    });
});

// create a method to stores or insert or add users 
app.post('/create',(req,res)=>{
//stored all data in variables 
const{name,email,age} =req.body;
// write a insert mysql query
const query='insert into users (name,email,age) values(?,?,?)';
db.query(query,[name,email,age],(err,result)=>{
    if(err){
        req.flash('message','Errors occured while Data added');
        return res.redirect('/create');    
    }
    req.flash('message','User added successfully');
    res.redirect('/');
});


// set all routes here..................
// set all users display routes here or display all users....
app.get('/',(req,res)=>{
    db.query('select * from users',(err,result)=>{
      if(err) throw err;
      res.render('index',{users:result,message:req.flash('message')});

    });

});

});
// create a method to edit all users data 
app.get('/edit/:id',(req,res)=>{
    // stored id via params
    const userId=req.params.id;
    // write a query to edit data
    db.query('select * from users where id=?',[userId],(err,result)=>{
        if(err)
        {
            req.flash('message','Errors Occurred while deleting data');
        }
        else 
        {
         res.render('edit',{
            user:result[0],
            message:req.flash('message')
         }) 
        }
    });
});
// create a method to update all users data 
app.post('/edit/:id',(req,res)=>{
    //stores params id
    const userId=req.params.id;
    //stored all data in variables 
    const{name,email,age} =req.body;
    const query='update users set name=?, email=?,age=? where id=?';
    db.query(query,[name,email,age,userId],(err,result)=>{
        if(err)
        {
            req.flash('message','Errors occured while Updating data');
            return res.redirect(`/edit/${userId}`);
        }
        else 
        {
            req.flash('message','user successfully updated')
            res.redirect('/');
        }
    })

})
// create a method to delete users data
app.get('/delete/:id',(req,res)=>{
    const userId=req.params.id;
    // write a query of delete
    db.query('delete from users where id=?',[userId],(err, result)=>{
        if(err)
        {
            req.flash('message','Errors Occurred while deleting data');
        }
        else 
        {
            req.flash('message','User Data successfully deleted');
        } 

          res.redirect('/');

        });
});


// create a node server to run in node cmd ....
//  start server 
app.listen(port,()=>{
    console.log(`server is running on :http://localhost:${port}`);
})

