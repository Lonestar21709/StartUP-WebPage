var express = require("express") ;
var app = express();
var serverStatic = require('serve-static');
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/images"));
app.use(express.static(__dirname + "/mods"));
//passing a path to the html file 
app.get("/", function(req, res){
    // res.sendFile(path.join(__dirname + '/mods/bootstrap.min.css'));
    res.sendFile(path.join(__dirname + '/views/homepage.html'));
});






app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SUPER GREEN!");
});



