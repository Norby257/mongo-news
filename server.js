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


//  Database configuration - leaving these as comments for now 
// var databaseURL = "mongoNews";
// var collections = ["news"];

// var db = mongojs(databasURL, collections);

//  log errors so we know what's going on with errors 

// db.on("error", function(err){
//     console.log("Database Error:", error)
// });

// //  requiring routes here 
// require("./routes/api-routes/api-routes.js")(app);
// require("./routes/html-routes/html-route.js")(app)

//  modify this line to handle the mongoDB heroku config



var PORT = 3000

//  include mongoDB syncing here
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
})
