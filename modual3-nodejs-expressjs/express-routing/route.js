
var express=require("express");
var app=express();
// app.get('/',function(req,res){
//     res.send("helo jalpa how are you");
// })

//http://localhost:8000/about-us

// app.get('/about-us',function(req,res){
//     res.send("hello jalpa how are you");
// })

// app.post('/about-us',function(req,res){
//     res.send("hello jalpa how are you");
// })


// app.post('/about-us',function(req,res){
//     res.all("hello jalpa how are you");
// })

// // command line curl -X POST "http://localhost:8000/about-us"
// app.post('/about-us',function(req,res){
//     res.send("hello jalpa how are you");
// })


//all : all is used to handel all type of http request using methods 
// Note : all method is always used with middleware ...


// command line curl -X POST "http://localhost:8000/about-us"
// app.get('/our-services',function(req,res){
//     res.send("just used examples of node js route");
// })

// app.post('/our-services',function(req,res){
//     res.send("just used examples of node js route");
// })


app.get('/contact-us',function(req,res){
    res.send("just it is a testing of loading contact us route");
})

app.listen(8000);
console.log('Your server successfully running','http://localhost:8000');
