
var fs=require("fs");
// fs.mkdir(filepath,callbackfunction);
fs.mkdir('/nodejs-mwf-12pm/module1-nodejs/file-system/test',function(err){
    if(err)
    {
        return console.log('err');
    }
    console.log('directory created successfully')
});
