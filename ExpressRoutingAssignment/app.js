var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment");
})

app.get("/speak/:animal", function(req, res){
    if(req.params.animal === "dog"){
        res.send("Woof Woof");
    }
    else if(req.params.animal == "cow"){
        res.send("Mooooooo");
    }
    else if(req.params.animal == "pig"){
        res.send("Oink Oink");
    }
    else if(req.params.animal == "sheep"){
        res.send("baaaaaaaa");
    }
    else if(req.params.animal == "cat"){
        res.send("Meeeeoooowww");
    }
    else{
        res.send("Sorry we don't have that animal in our database");
    }
})

app.get("/repeat/:word/:number", function(req, res) {
   
   var loop = parseInt(req.params.number, 10);
   var stringToRepeat = "";
   
    for(var i = 0; i < loop; i++){
        
        stringToRepeat += req.params.word + " ";
        
    }
    
    res.send(stringToRepeat)
})

app.get("*", function(req, res) {
    res.send("Sorry, page not found. . .What are you doing with your life?");
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});