//  node dependencies
var express = require("express")
var bodyParser = require("body-parser")
var cheerio = require("cheerio")
var mongoose = require("mongoose")
var request = require("request")

//  model dependencies 
var db = require("./models");

//  instantiate the app 
var app = express()

//  facilitating serving static data 
//  may need to update this later on
app.use(express.static("public"));

//  facilitating data parsing 
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(bodyParser.json())

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
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  // useMongoClient: true
});

//requiring routes
var routes = require("./routes/api-routes/api-routes")
app.use("/all", routes)
app.use("/save", routes)
app.use("/scrape", routes)
app.use("/delete", routes)




//  log errors so we know what's going on with errors 

// db.on("error", function(err){
//     console.log("Database Error:", error)
// });



//  modify this line to handle the mongoDB heroku config

var PORT = 3000

//  include mongoDB syncing here
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
})
