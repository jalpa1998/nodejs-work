const express=require("express");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const items=require("./models/item");
const app=express();

//middleware..
app.use(bodyparser.urlencoded({extended:true}));
//set a routing or ejs template engine routing
//create connection app through mongo DB......
//mongoose.connect('mongodb://localhost:27017/crudapp',{usenewurlparser:true,useunifiedtopology:true})
//.then(()=>console.log('database connected with mongoDB'))
//.catch(err=>console.error('database can not cannected with mongoDB.....',err));


mongoose.connect('mongodb://127.0.0.1:27017/crudapp',{usenewurlparser:true,
useunifiedtopology:true})
.then(()=>console.log('database connected with mongoDB'))
.catch(err=>console.error('database can not cannected with mongoDB.....',err));mongoose.connect
('mongodb://localhost:27017/crudapp',{usenewurlparser:true,useunifiedtopology:true})
.then(()=>console.log('database connected with mongoDB'))
.catch(err=>console.err('database can not cannected with mongoDB.....',err));
    

app.set('view engine','ejs');
//routing for home page

//list all  added itams

app.get('/',async(req,res)=>{
    const itams=await item.find();
    res.render('index',{item});
});
app.get('/',async(req,res)=>{
    res.render('new');
});
a
//routing for new add data page
app.post('/additems',async(req,res)=>{
    //add data in mongoDB database
    const{name,email,phone,pin,age,address}=req.body;
    const newitem=new({name,email,phone,pin,age,address});
    //insrt a newitem data in database
    await newitem.save();
    res.redirect('/');
});
//routing for edit page
app.get('/edit/:id',async(req,res)=>{
const item=await item.findbyid(req.params.id);
    res.render('edit',{items});
});
//routing for update data page
//routing for delete data page
app.get('/delete/:id',async(req,res)=>{
    await item.findbyidanddelete(req.params.id);
    res.redirect('/');
});


//create a server
app.listen(21021,()=>{
    console.log('server running on http://localhost:21021');
});