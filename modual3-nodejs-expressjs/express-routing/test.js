
var express=require("express");
// store a Router 
var router=express.Router();

router.get('/',function(req,res){
    res.send('Just testing of Router');
});

router.post('/', function(req, res){
    res.send('POST route on things.');
 });

module.exports = router;
