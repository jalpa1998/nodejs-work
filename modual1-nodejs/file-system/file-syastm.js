
/*  

in node js a external module is called fs i.e called file system
node js is used to handel any file such as read | write | read-write | write-read file open there we used file handeling

    var fs=require("fs");


    node js provides some inbuild methods to read | write on file
    node js provides some modes to provides read and write permissions

    Methods of node js is file sytems ....

    1) writing on file

       var data=fs.writeFile(filepath,file);
       var data=fs.writeFileSync(filepath,file);


    2) Reading on file

       var data=fs.readFile(filepath,callback);
       var data=fs.readFileSync(filepath,callback);   


    2) Open a file

       var data=fs.open(filepath,flags[,mode],callback);
       

    Modes of file systems in node js .....

      srNo.     modes                        descriptions
      1         r                           open a file for reading if file does not exist can not create a file.

      2         r+                           open a file for reading and writing if file does not exist can not create a file.

      3         rs                           open a file for reading synchrounous mode
      4         rs+                          open a file for reading | writing synchrounous mode
      5         w                            open file for writing if file does not exist create a new file

      6         w+                           open a file for reading | wring if file does exist create a new file


      7.   wx
      
      8.   wx+

      9.   ax

      10   ax+

      

      


*/
