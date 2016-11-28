var publish={};
publish.lireFichier=function(){  
  return new Promise(function (fulfill, reject){
    fs = require('fs')
    fs.readFile('config/config.ini', 'utf8', function (err, res){
      if (err) reject(err);
      else fulfill(res);
    });
  });
}

module.exports=publish;
