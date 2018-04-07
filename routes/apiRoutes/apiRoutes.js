//  dependencies
var express = require("express")

var router = express.Router()

var articleController = require("../../controllers/articleController")

var commentController = require("../../controllers/commentController")

//  route for getting ALL articles from DB
router.get("/articles/", articleController.findAll)

//  route for getting article by ID
router.get("/:id", articleController.findOne)

//  post article to DB
router.post("/save", articleController.create)

//  delete an article from the DB
router.delete("/:id", articleController.delete)

console.log("API routes")

//  comment routes

//  save a comment to an article 
router.post("/:id", commentController.create)

//  delete a comment from an article 
router.delete("/:id", commentController.delete)

//  show all comments 
router.get("/comments", commentController.findAll)

module.exports = router

