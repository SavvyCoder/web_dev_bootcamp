

var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test_site");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

app.get("/", function(req , res){
    res.render("home");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Test site has started");
});