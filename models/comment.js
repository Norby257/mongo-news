var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var commentSchema = new Schema({

  _articleId: {
    type: Schema.Types.ObjectId,
    ref: "Article"
  },

  date: {
    type: Data,
    date: Date.now
  },

   commentText: {
    type: String
  },


})

var Comment = mongoose.model("Comment", commentSchema);
console.log("This is the comment *****")


