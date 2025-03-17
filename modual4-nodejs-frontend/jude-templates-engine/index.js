
const express=require("express");
const app=express();
const ejs=require('ejs');
const path=require('path');
// set EJS as the view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
// add public folder or directory
app.use(express.static(path.join(__dirname,'public')));

// get or define a route to render the html page via app.get() load index.ejs.js file 
app.get('/',(req,res)=>{
    const data={
        title:'My first webpage titles load here',
        heading:'Welcome to our Home Page',
        description:'This is a examples of EJS engine in node js'
    };
    res.render('index',data);

});

// start a server of node js
app.listen(8000,()=>{
    console.log('server started on port 8000');
});
