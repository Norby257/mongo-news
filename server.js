//  node dependencies
var express = require("express")
var bodyParser = require("body-parser")
var cheerio = require("cheerio")
var mongoose = require("mongoose")
var request = require("request")

//  model dependencies 

var article = require("./models/articles");
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

//  requiring routes here 

//  modify this line to handle the mongoDB heroku config

//  scraping data - will move this into a diff file
//  running really slow - will try a few diffrent things to fix this 
//  select something diff 
app.get("/scrape", function(req, res){
  app.get("http://www.aljazeera.net/news/scienceandtechnology", function(err, response, html){
    //  load html body from request into cheerio 
    var $ = cheerio.load(html);
    $("a.title").each(function(i, element){
      console.log(element);
      // var link = $(element).children("a").attr("href")
    })

  })



})


 // repeting elements:
 // a.title 
 // p 
var PORT = 3000

//  include mongoDB syncing here
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
})
