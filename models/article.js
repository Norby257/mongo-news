var mongoose = require("mongoose")
var Schema = mongoose.Schema

var articleSchema = new Schema({
  headline: {
    type: String,
    required: true,
    unique: {index: {unique: true}}
  },

  link: {
    type: String,
    required: true
  },

  summary: {
    type: String,
  required: true
  },

date: {
  type: Data,
  default: Date.now
},

saved: {
  type: Boolean,
  default: false
}

})
var Article = mongoose.model("Article", articleSchema)
console.log("this is the article --------------")

module.exports = Article
