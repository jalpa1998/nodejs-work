
var fs=require("fs");
var fd=fs.open("ajax.txt",'r',(err,fd)=>{

    if(err){
        console.log(err);
        return;
    }

 fs.readFile(fd,(err)=>{
    if(err){
        console.log(err);
        return;

    }
    console.log('read successfully');
    
 })   

    
})
