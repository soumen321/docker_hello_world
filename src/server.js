var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.send("Welcome to Hello World");
})


app.listen(3000,function(){
    console.log("Listing port 3000")
})