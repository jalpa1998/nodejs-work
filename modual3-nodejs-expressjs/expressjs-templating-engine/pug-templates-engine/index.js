
var express=require('express');
var app=express();
app.set('view engine','pug');
app.set('views','./views');
// app.get('/', function(req,res){
//     res.render('first_views');
// })
app.get('/', function(req,res){
    res.render('aboutus');
})

app.listen(5000);
console.log('Server is running on http://localhost:5000');
