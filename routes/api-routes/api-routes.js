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

//  here is the scrape route 

//  scraping data - will move this into a diff file
//  headline, summary, URL 
//  let's also try label and time stamp 
 
app.get("/scrape", function(req, res){
  request("https://www.aljazeera.com/news/", function(err, response, html){
      //  load html body from request into cheerio 
      var $ = cheerio.load(html);
      var results = [];
      //  keeping these as comments for examples while I test a few things out 
      // $(".indepth-inner-title").each(function(i, element){
      //   console.log($(element).text());
        // var link = $(element).children("a").attr("href")
        //  headline  - .topics-sec-item-head"
        //  so this "functions" - just have to determine relationship of elements 
        $(".topics-sec-item-head").each(function(i, element) {
          // console.log($(element).text());
          var title = $(element).text();
          console.log(title);        // var title = $(element).children("a").text();
          var summary 
          
          // var link = $(element).children().attr("href");
          // console.log(title);
          // console.log(link);
  
          //  summary 
    
  
        })
  
      })
  
    })
  
  
  
  // })
  
  
   // repeting elements:
   // a.title 
   // p 