var 
express = require("express"),
mongoose = require("mongoose"),
bodyParser = require("body-parser"),
User = require("./models/user"),
passport = require("passport"),
LocalStrategy = require("passport-local"),
passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/auth_demo_app");

var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({
    secret: "Athena and Hercules are munky babies",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//=========
// ROUTES
//=========


app.get("/", function(req, res){
   res.render("home"); 
});

app.get("/secret",isLoggedIn, function(req, res){
    res.render("secret");
})

//Auth Routes 

//show signup form
app.get("/register", function(req, res){
    res.render("register");
});
//handling user sign up
app.post("/register", function(req, res){
   var newUser = new User({username: req.body.password});
   User.register(newUser, req.body.password, function(err, user){
      if(err){
          console.log(err);
          return res.render("register");
      }
      passport.authenticate("local")(req, res, function(){
          res.redirect("/secret");
      });
   });
});

//Login Routes
//Render Login form
app.get("/login", function(req, res) {
    res.render("login");
});
//login logic
app.post("/login",passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}) ,function(req, res){
    
});

app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
 console.log("Server Started");   
})