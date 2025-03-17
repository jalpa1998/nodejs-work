
var fs=require("fs");
// using fs we can read file | write on file | remove a file using fs module file handeling in node js
var data=fs.readFileSync('input.txt'); //readFileSync() //each block of code read from input.txt
console.log(data.toString());

