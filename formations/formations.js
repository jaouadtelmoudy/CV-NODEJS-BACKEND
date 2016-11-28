var express=require("express");
var router=express();
router.get("/",function(req,res){
  res.json({formations:"formations"});
});

module.exports=router;
