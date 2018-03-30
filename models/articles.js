//  Mongoose dependendencies

var mongoose = require("mongoose")
var Schema = mongoose.Schema

//  making a schema  // keeping values as strings for now
//  will go back and add more to this
//  aka, comments

var articleSchema = new Schema({
  headline: String,
  summary: String,
  url: String,
  created_at: Date,
  updated_at: Date
})

var Article = mongoose.model("Article", articleSchema)
console.log("this is the article --------------")
//  export

module.exports = Article;
