//  these are the callbacks to the routes 
var db = require("../models");

module.exports = {
    //  works when i do articles/articles  in postMan- not sure why
  findAll: function(req, res) {
      db.Article.find({}).then(function(dbArticle){
          res.json(dbArticle);
      })
      .catch(function(err){
          res.json(err);
      })

  },
    //  find one 
    findOne: function(req, res) {
        db.Article.findOne({_id: req.params.id})
        .populate("Comment")
        .then(function(dbArticle){
            res.json(dbArticle);
        })
    },
     //  this correlates to post route 
    create: function(req, res) {
           
            db.Article.create(req.body).then(function (dbArticle) {
                res.json(dbArticle);
            })

    }, 

    delete: (req, res) => {
        const _id = req.params.id;
        db.Article
        .deleteOne({_id})
        .then((dbArticle)=> res.json(dbArticle))
    }

}

