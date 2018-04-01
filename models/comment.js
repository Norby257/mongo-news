var mongoose = require("mongoose");

var Schema = mongoose.Schema 

var commentSchema = new Schema({
    title: String,
    body: String
});

var Comment = mongoose.model("Comment", commentSchema);
console.log("This is the comment ---*****");

module.exports = Comment;

