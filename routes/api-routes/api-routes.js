//  get route for scraping the web - re watch the video 

//  route for getting articles from DB
app.get("/all", function(req, res) {
  db.news.find({}, function(error, data) {
    //  log any errors for debugging
    if (error) {
      console.log(error)
    } else {
      // if no error, send json of data back to user
      //  I don't have data here yet
      res.json(data)
    }
  })
})

//  post an article to the database

app.post("/save", function(req, res) {
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

app.get("/delete/:id", function(req, res) {
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
