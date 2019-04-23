var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var  User = mongoose.model("User", userSchema);

// var newUser = User ({
//     email: "Ada@lovelace.com",
//     name: "Ada Lovelace"
// });

// newUser.posts.push({
//     title: "Computers",
//     content: "I invented them! :P"
// });


// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// }); 

// var newUser = new User ({
//     email: "banana@gmail.com",
//     name: "Banana"
// });

// var newPost = new Post ({
//     title: "Reflections on Bananas",
//     content: "They are delicous"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(post);
//     }
// });

User.findOne({name: "Ada Lovelace"}, function(err, user){
    if(err){
        console.log(err);
    }
    else{
        user.posts.push({
            title: "Computers 2",
            content: "What's with Apple??? Ya'll tryna get hsutled??"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            }
            else{
                console.log(user);
            }
        })
    }
});

