
var express=require('express');
var app=express();
// load pug views from views directory
app.set('view engine','pug');
app.set('views','./views');
app.use(express.static('public'));
// routing set 
app.get('/',function(req,res){
    res.render('content');
});

app.get('/contact-us',function(req,res){
    res.render('contact');
});

app.get('/create-account',function(req,res){
    res.render('register');
});

// generate server
app.listen(4000);
console.log('server successfully run http://localhost:4000');
