var express=require("express");
var router=express();
router.get("/",function(req,res){
  res.json({experiences:"experiences"});
});

module.exports=router;
