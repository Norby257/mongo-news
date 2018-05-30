var db = require("../models");

module.exports = {
//  save a comment to a SPECIFIC article 
create: function(req, res) {
   //   req.body - {"text": "Generic comment here "}
   db.Comment.create(req.body)
   .then(function(dbComment){
       res.json(dbComment);
    });
   
},

//  route for finding an article by id and POPULATING it with a note 
findAll: (req, res) => {
    db.Comment.find({_ArticleId: req.params.id}).then(function(dbComment){
        res.json(dbComment)
    })
      .catch(function(err){
          res.json(err)
      })
 },

//  delete a comment from an article 
delete: function(req, res) {
    db.Note.remove({_id: req.params.id}).then(function(dbComment){
        res.json(dbComment);
    });
}

};