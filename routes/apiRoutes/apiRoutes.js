//  dependencies
var express = require("express")

var router = express.Router()

var articleController = require("../../controllers/articleController")

//  route for getting ALL articles from DB
router.get("/articles/", articleController.findAll)

//  route for getting article by ID
router.get("/:id", articleController.findOne)

//  post article to DB
router.post("/save", articleController.create)

//  delete an article from the DB
router.delete("/:id", articleController.delete)

//  will remove comments later after the above have been tested

//  Select an article by id and populate it with its comment
//  this needs to be fixed too
router.get("/articles/:id", function(req, res) {
  db.Article.findOne({ _id: req.params.id })
    //  populate it with comments
    .populate("comment")
    .then(function(dbArticle) {
      res.json(dbArticle)
    })
    //  if error, send to client
    .catch(function(err) {
      res.json(err)
    })
})

console.log("API routes")

module.exports = router

