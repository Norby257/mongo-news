//  node dependencies
var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var request = require("request")
var logger = require("morgan")
var routes = require("./routes")

//  dependencies for web scraping

//  model dependencies
var db = require("./models")
// console.log(db);

//  instantiate the app
var app = express()

var PORT = process.env.PORT || 3000
//  facilitating serving static data
//  may need to update this later on
app.use(express.static("public"))

//  facilitating data parsing
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())

app.use(routes)

//  setting handlebars

var exphbs = require("express-handlebars")

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
)

app.set("view engine", "handlebars")

// Connect to the Mongo DB
var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines"

// Connect to the Mongo DB
mongoose.Promise = Promise
mongoose.connect(MONGODB_URI, {
  // useMongoClient: true
})


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
})
