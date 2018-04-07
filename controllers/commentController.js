var db = require("../models");

module.exports = {
//  save a comment to a SPECIFIC article 
create: function(req, res) {
   //   req.body - {"text": "Generic comment here "}
   db.Comment.create(req.body)
   .then(function(dbComment){
    return db.Article.findOneAndUpdate({_id: req.params.id}, {comment: dbComment._id}, {new: true});
   })
    .then(function(dbArticle){
        res.json(dbArticle);
    }).catch(function(err){
        res.json(err);
    });
   
},

//  route for finding an article by id and POPULATING it with a note 
findAll: (req, res) => {
    db.Comment.find({}).then(function(dbComment){
        res.json(dbComment)
    })
      .catch(function(err){
          res.json(err)
      })
 },

//  delete a comment from an article 
delete: (req, res) => {
    const _id = req.params.id;
    db.Comment
    .deleteOne({_id})
    .then((dbComment) => res.json(dbComment));
}

}