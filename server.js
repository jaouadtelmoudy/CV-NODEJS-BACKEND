var express=require('express');
var http=require("http");
var app=express();
var contact=require("./contact/contact.js");
var langues=require("./langues/langues.js")

app.use("/contact",contact);
app.use("/langues",langues);

var config=require("./config/config.js");
  config.lireFichier().then(function(data){
        http.createServer(app).listen(data);
        console.log("Serveur est démaré sur le port : 3000");
  },function(err){
        console.log("Impossible de Lire le fichier de config");
        if(err) throw err;
  });
