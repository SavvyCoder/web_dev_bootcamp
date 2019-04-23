var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
        
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
        
    ]
});

var User = mongoose.model("User", userSchema);


// Post.create({
//     title: "How to eat Banana the best pt.3",
//     content: "Banana Ipsum Banana Ipsum GOOKO"
// }, function(err, post){
//     User.findOne({email: "Dexter@defromage.fr"}, function(err, foundUser){
//         if(err){
//             console.log(err);
//         }
//         else{
//             foundUser.posts.push(post._id);
//             foundUser.save(function(err,data){
//                 if(err){
//                     console.log(err);
//                 }
//                 else{
//                     console.log(data);
//                 }
//             })
//         }
//     })
// });



// User.create({
//     email: "Dexter@defromage.fr",
//     name: "Omelette o' Framagge"
// });


User.findOne({email: "Dexter@defromage.fr"}).populate("posts").exec(function(err, user){
    
    if(err){
        console.log(err);
    }
    else {
        console.log(user);
    }

});