//  Mongoose dependendencies

var mongoose = require("mongoose")
var Schema = mongoose.Schema

var articleSchema = new Schema({
  headline: {
    type: String,
    unique: true,
    required: true
  },

  link: {
    type: String,
    required: true
  },

  summary: String,
  url: String,

  //  setting up the reference to comments
comment: {
  type: Schema.Types.ObjectId,
  ref: "Comment"
}
})
var Article = mongoose.model("Article", articleSchema)
console.log("this is the article --------------")
//  export

module.exports = Article
