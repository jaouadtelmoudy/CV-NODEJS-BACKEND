var express=require('express');
var http=require("http");

var app=express();
var contact=require("./contact/contact.js");
var langues=require("./langues/langues.js");
var formations=require("./formations/formations.js");
var projets=require("./projets/projets.js");
var experiences=require("./experiences/experiences.js");
var loisirs=require("./loisirs/loisirs.js");


app.use("/contact",contact);
app.use("/langues",langues);
app.use("/formations",formations);
app.use("/projets",projets);
app.use("/experiences",experiences);
app.use("/loisirs",loisirs);



var config=require("./config/config.js");
  config.lireFichier().then(function(data){
        http.createServer(app).listen(data);
        console.log("Serveur est démaré sur le port : 3000");
  },function(err){
        console.log("Impossible de Lire le fichier de config");
        if(err) throw err;
  });
