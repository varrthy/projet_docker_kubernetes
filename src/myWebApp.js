var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, "myWebApp.html"));
});

app.listen(3000, function (){
    console.log("app listening on port 3000!");
});



