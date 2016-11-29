var express=require('express');
var http=require("http");
var app=express();
var contact=require("./contact/contact.js");
var langues=require("./langues/langues.js");
var formations=require("./formations/formations.js");
var projets=require("./projets/projets.js");
var experiences=require("./experiences/experiences.js");
var loisirs=require("./loisirs/loisirs.js");
// la commande pour activer le mode set DEBUG=*,-not_this
// Afficher les logs dans la console
expressLogging = require('express-logging'),
logger = require('logops');
//app.use(expressLogging(logger));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use("/contact",contact);
app.use("/langues",langues);
app.use("/formations",formations);
app.use("/projets",projets);
app.use("/experiences",experiences);
app.use("/loisirs",loisirs);



var config=require("./config/config.js");
config.lireFichier('config/config.ini').then(function(data){
        http.createServer(app).listen(data,"127.0.0.1",function(){
          console.log("Serveur est démaré sur le port : 3000");
        });
      //  console.log("Serveur est démaré sur le port : 3000");
},function(err){
        console.log("Impossible de Lire le fichier de config");
        if(err) throw err;
});
