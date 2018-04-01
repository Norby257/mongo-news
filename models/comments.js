var mongoose = require("mongoose");

//  here is ref to Schema constructor 
var Schema = mongoose.Schema;

//  creating a commentSchema object 
//  It is semantically similar to the sequelize model 

var CommentSchema = new Schema({
    title: String,

    body: String
})

var Comment = mongoose.model("Comment", CommentSchema);
console.log("This is the comment ---------*****");

module.exports = Comment;
