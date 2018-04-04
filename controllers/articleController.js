var db = require("../models");

module.exports = {
    //  routes we should have 
    find: function(req, res) {
            //  find all from the DB 

            db.Article.find({}, function(error, found){
                if (error) {
                    console.log(error);
                }
                else {
                    res.json(found);
                }
            })


    },
    //  find one 
    findOne: function(req, res) {
        db.Article.findOne({_id: req.params.id}).then(function(dbArticle){
            res.json(dbArticle);
        })
    },

    create: function(req, res) {
            //  this correlates to post route 
            db.Article.create(req.body).then(function (dbArticle) {
                res.json(dbArticle);

            })


    }, 

    delete: function(req, res) {
            db.Article.remove(
                {
            //  delete article controller 
            _id: mongojs.ObjectID(req.params.id)
                

            }, 
            function(error, removed) {
                if (error) {
                    console.log(error);
                    res.send(error);
                } else {
                    console.log(removed);
                    res.send(removed);
                }
            }
        )


    }
    // optional - clear all route 
    //  and then we repeat this for comment
}

//  this is exported in controllers folder and then required in routes folder 