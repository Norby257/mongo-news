//  dependencies
var express = require("express")

var router = express.Router()

//  route for getting articles from DB

app.get("/articles", function(req, res){
  db.Article.find({})
  .then(function(dbArticle){
    //  if found, send back 
    res.json(dbArticle);
  })
  .catch(function(err){
    res.json(err);
  })
})

//  Select an article by id and populate it with its comment 

router.get("/articles/:id", function(req, res){
  db.Article.findOne({_id: req.params.id})
  //  populate it with comments 
  .populate("comment")
  .then(function(dbArticle){
    res.json(dbArticle);
  })
  //  if error, send to client 
  .catch(function(err){
    res.json(err);
  })
})

//  post an article to the database

router.post("/save", function(req, res) {
  //  logging req.body for debugging purposes
  console.log(req.body)
  //  insert the article into the articles collection
  db.news.insert(req.body, function(error, saved) {
    //  log errors if they occur
    if (error) {
      console.log(error)
    } else {
      //  send it to browser
      res.send(saved)
    }
  })
})

//  routes for adding comments

// route for deleting comments

//  route for deleting saved articles

router.get("/delete/:id", function(req, res) {
  db.news.remove(
    {
      _id: mongojs.ObjectID(req.params.id)
    },
    function(error, removed) {
      //  log error
      if (error) {
        console.log(error)
        res.send(error)
      } else {
        //  send response to browser if successful
        console.log(removed)
        res.send(removed)
      }
    }
  )
})


    console.log("API routes");

    module.exports = router;
  
  
  
  // })
  