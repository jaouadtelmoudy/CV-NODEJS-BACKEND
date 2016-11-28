var express=require("express");
var router=express();
router.get("/",function(req,res){
  res.json({loirirs:"loirirs"});
});

module.exports=router;
