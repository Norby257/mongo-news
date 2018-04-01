//  Mongoose dependendencies

var mongoose = require("mongoose")
var Schema = mongoose.Schema

var articleSchema = newSchema({
  headline: {
    type: String,
    unique: true
  },

  summary: String,
  url: String,

  //  setting up the reference to comments 
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]

})
var Article = mongoose.model("Article", articleSchema)
console.log("this is the article --------------")
//  export

module.exports = Article;
