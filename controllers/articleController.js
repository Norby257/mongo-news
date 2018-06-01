//  these are the callbacks to the routes 
var db = require("../models");

module.exports = {
    //  works when i do articles/articles  in postMan- not sure why
  findAll: function(req, res) {
      db.Article
      // .find(req.query)
      .find({})
      .sort({date: -1})
      .then(function(dbArticle){
          res.json(dbArticle);
      })
      .catch(function(err){
          res.json(err);
      })

  },


delete: function(req, res) {
    db.Article.remove({_id: req.params.id}).then(function(dbArticle) {
       res.json(dbArticle);
    });
},

update: function(req, res) {
    db.Article.findByIdAndUpdate({_id: req.params.id},{$set: req.body }, {new: true}).then(function(dbArticle ){

    });
}

};

