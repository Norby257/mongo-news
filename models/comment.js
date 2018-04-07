var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var commentSchema = new Schema({
  text: {
    type: String
  }
})

var Comment = mongoose.model("Comment", commentSchema);
console.log("This is the comment *****")


