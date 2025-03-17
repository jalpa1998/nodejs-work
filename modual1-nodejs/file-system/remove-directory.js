
var fs=require("fs");
// fs.rmdir(filepath,callbackfunction);
fs.rmdir('/nodejs-mwf-12pm/module1-nodejs/file-system/test',function(err){
    if(err)
    {
        return console.error(err);
    }
    console.log('directory removed  successfully')
    // read a directory

    fs.readdir('/nodejs-mwf-12pm/module1-nodejs/file-system/',function(err,files){

        if(err)
        {
            console.error(err)
        }
        files.forEach(function(file){
            console.log(file);
        })

    })
});
