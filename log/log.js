var publish={};
publish.logguer=function(info){
      var fs = require('fs');
      fs.writeFile("./log/log.ini", info, function(err) {
          if(err) {
               console.log(err);
          }
          console.log("The file was saved!");
      });
}
module.exports=publish;
