var express=require('express');
var router=express();

router.get("/",function(req,res) {
  var config=require("../config/config.js");
  config.lireFichier('./contact/data.json').then(function(data){
      res.json(JSON.parse(data));
  },function(err){
      if(err) throw err;
  });
});

module.exports=router;
