var express=require("express");
var router=express();
router.get("/",function(req,res){
  res.json({langues:"Francais"});
});

module.exports=router;
