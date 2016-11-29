var publish={};
publish.lireFichier=function(pathFile){
  return new Promise(function (fulfill, reject){
    fs = require('fs')
    fs.readFile(pathFile, 'utf8', function (err, res){
      if (err) reject(err);
      else fulfill(res);
    });
  });
}

module.exports=publish;
