//  Mongoose dependendencies

var mongoose = require("mongoose")
var Schema = mongoose.Schema

//  making a schema  // keeping values as strings for now
//  will go back and add more to this
//  aka, comments
//  or, are comments their own thing - I think so - making a separate model and api 
//  I deleted that but it's fine either way - can always go back, make a new branch and try it out 

var articleSchema = new Schema({
  headline: String,
  summary: String,
  url: String,
  comment: String,
  byline: String,
  created_at: Date,
  updated_at: Date
})

var Article = mongoose.model("Article", articleSchema)
console.log("this is the article --------------")
//  export

module.exports = Article;
