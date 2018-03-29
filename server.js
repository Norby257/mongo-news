//  node dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var request = require("request");

var app = express();


//  Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "public")));

//  this is the body parser 
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.use(bodyParser.json());


//  setting handlebars 

var exphbs = require("express-handlebars");

app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
)


app.set("view engine", "handlebars")

//  routes 

//  modify this line to handle the mongoDB heroku config
var PORT = 3000;


//  include mongoDB syncing here 
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});