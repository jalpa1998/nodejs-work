
const express = require('express');
const mongoose = require('mongoose');
const Item = require('./models/item');
const User = require('./models/user');
const app = express();
const bodyParser=require('body-parser');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const dotenv=require('dotenv');
// Middleware to parse incoming JSON data
app.use(bodyParser.json());
app.use(express.json());
// MongoDB connection setup
mongoose.connect('mongodb://127.0.0.1:27017/restApiApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));

// POST API to add a user to the database  URL   http://localhost:3000/addusers
app.post('/addusers', async (req, res) => {
  console.log('Request Body:', req.body);  // Log the incoming request body
  const { name, email, phone, pin, age, address } = req.body;

  // Validation: Ensure all required fields are provided
  if (!name || !email || !phone || !pin || !age || !address) {
    return res.status(400).json({
      message: 'Missing required fields: name, email, phone, pin, age, and address are required.'
    });
  }
  try {
    // Create a new item with the provided data
    const item = new Item(req.body);
    await item.save();
    // Respond with the saved item
    res.status(201).json(item);
  } catch (err) {
    console.error('Error while creating user:', err);
    res.status(400).json({
      message: 'Error creating user.',
      error: err.message
    });
  }
});

// get all users data api URL  http://localhost:3000/addusers
app.get("/showusers",async(req,res)=>{
  try 
  {
    const items=await Item.find();
    res.status(200).json(items);
  }
  catch(err)
  {
    res.status(404).json({message:'Error fetching users data',error:err});
  }
});

// create to Read or Get particular ID of data  URL  http://localhost:3000/addusers/67777f44bd16d74441dfffcf
app.get("/showusers/:id",async(req,res)=>{
  try 
  {
    const items=await Item.findById(req.params.id);
    if(!items)
    {
      res.status(404).json({message:'Users Data not found'});
    }
    res.status(200).json(items);
  }
  catch(err)
  {
    res.status(400).json({message:'Error fetching users data',error:err});
  }
});

// create to Read or Get particular ID of data for EDit users data URL  http://localhost:3000/addusers/67777f44bd16d74441dfffcf
app.get("/editusers/:id",async(req,res)=>{
  try 
  {
    const items=await Item.findById(req.params.id);
    if(!items)
    {
      res.status(404).json({message:'Users Data not found'});
    }
    res.status(200).json(items);
  }
  catch(err)
  {
    res.status(400).json({message:'Error fetching users data',error:err});
  }
});

// Update a users data (put)  URL  http://localhost:3000/updateusers/:id
app.put("/updateusers/:id",async(req,res)=>{
  try 
  {
    const items=await Item.findByIdAndDelete(req.params.id,req.body,{new:true});
    if(!items)
    {
      res.status(404).json({message:'Users Data not found'});
    }
    res.status(200).json(items);
  }
  catch(err)
  {
    res.status(400).json({message:'Error Updating users data',error:err});
  }
});

// Delete a users data(delete) URL http://localhost:3000/deleteusers/67777f44bd16d74441dfffcf
app.delete("/deleteusers/:id",async(req,res)=>{
  try 
  {
    const items=await Item.findByIdAndDelete(req.params.id);
    if(!items)
    {
      res.status(404).json({message:'Users Data not found'});
    }
    res.status(200).json(items);
  }
  catch(err)
  {
    res.status(400).json({message:'Error Deleting users data',error:err});
  }
});

// user Authentications Register & Login via jwt
// for generate a JWT(json web tokens for Gnerate web tokens )
// commands are....
// node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

// create or Register rest api for new users ...URL  http://localhost:3000/register
app.post('/register', async(req,res)=>{
     
  const {username,email,password}=req.body;
  try {
    //check if already users Exists 
 
    const userExists=await User.findOne({ email });
    if(userExists)
    {
      return res.status(400).json({error:'Users Already exists'})
    }
    // Hash encrypted the password 
    const hashedPassword=await bcrypt.hash(password,10);
    // create a new users
    const newUser=new User({
      username,
      email, 
      password:hashedPassword
    });

    await newUser.save();
    res.status(200).json({message:'User Registered successfully'});
  }
  catch(err)
  {
   res.status(500).json({error:'Errors Generating while create a New Users'});
  }


});

// create a api to check Login using jwt (json web tokens)  URL  http://localhost:3000/login
app.post('/login',async(req,res)=>{
   const {email,password}=req.body;
   try 
   {
    const user=await User.findOne({ email });
    if(!user)
    {
      return res.status(400).json({error:"Invalid credentials Input while Logged in Users"});
    }
    // compared a hashed Password  with stored hashed password
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch)
    {
      return res.status(400).json({error:"Invalid credentials Input while Logged in Users"});
    }
    // generate a JWT token 
    const token=jwt.sign({ userId:user._id},process.env.JWT_SECRET,{
         expiresIn:'1h'
    });
    return res.status(200).json({message:"You are Logged In Successfully",token});
  }  
  
   catch(err)
   {
    res.status({error:'Your email and Password AreIncorrect try again'});
   }
});


// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
