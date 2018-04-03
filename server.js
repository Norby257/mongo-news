//  node dependencies
var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
var request = require("request")
var logger = require("morgan")

//  dependencies for web scraping 
var axios = require("axios"); 
var cheerio = require("cheerio")


//  model dependencies 
var db = require("./models");
// console.log(db);

//  instantiate the app 
var app = express()


// using morgan logger 

app.use(logger("dev"));

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

// A GET REOUTE TO SCRAPE THAT WEBSITE 

app.get("/scrape", function(req, res){
  request("http://www.chicagotribune.com/",function(error,response, html){
      //  load into cheerio 
    var $ = cheerio.load(html);

    //  get h2 within the card-compenent_description 
    $(".trb_outfit_relatedListTitle_a").each(function(i, element){
        // console.log(element);
        //  saving in empty object 
        var result = {};
      var title = $(element).text();
      //  so fix the link part wooo! 
      var link = $(element).attr("href");

      var summary = $(element).children("p").text();
      
      //  the console.logging are for testing purposes 
      console.log(title);
      console.log(link);
       

  //  databse function - creating a new row in DB using the result object we had above 
      db.Article.create({
        title: title,
        link: link,
        summary: summary
      },
      function(err, inserted) {
        if (err) {
            //  log it to console 
          console.log(err);
        } else {
            //  log inserted data 
            console.log(inserted);

        }
      }
    )

    })
  })
      //  if it's sucessfull, send a message so client is not waiting 
      res.send("Scrape complete!");

})


//requiring routes
// var routes = require("./routes/api-routes/api-routes")
// app.use("/all", routes)
// app.use("/save", routes)
// app.use("/delete", routes)

//  modify this line to handle the mongoDB heroku config

var PORT = 3000

//  include mongoDB syncing here
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT)
})
