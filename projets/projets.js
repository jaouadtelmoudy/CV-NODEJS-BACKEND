var express=require("express");
var router=express();
router.get("/",function(req,res){
  res.json({projets:"projets"});
});

module.exports=router;
