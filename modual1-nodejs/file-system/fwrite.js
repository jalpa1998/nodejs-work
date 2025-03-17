
var fs=require("fs");

var fd=fs.open("jquery.txt",'w',(err,fd)=>{

    if(err){
        console.log(err);
    return;
    }

    // write on file
var data="jquery is client side scripting language";
fs.write(fd,data,(err)=>{
    if(err) {
        console.log(err)
    return;
}
// pass a messages 

console.log('file write successfully');

})


})
