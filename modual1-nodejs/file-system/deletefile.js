
var fs=require("fs");
// fs.unlink(path,callback);
fs.unlink('jquery.txt',(err)=>{
    if(err)
    {
        console.log(err)
        return;
    }
    console.log('File successfully deleted');
})
