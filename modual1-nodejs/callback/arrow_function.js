
var fs=require("fs");
// using fs we can read file | write on file | remove a file using fs module file handeling in node js
fs.readFile('input.txt',(err,data)=>{

    if(err)return console.error(err);

    console.log(data.toString());
    
});

