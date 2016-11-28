var express=require('express');
var router=express();

router.get("/",function(req,res) {
    res.json({contact:'1*****AAAAAAAAAAAAAAAA'});
});

module.exports=router;
