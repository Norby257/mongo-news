//  dependencies for scraping 
var axios = require('axios');
var cheerio = require('cheerio');

//  function that does the scraping 

// A GET REOUTE TO SCRAPE THAT WEBSITE

var scrape = function() {
    return axios.get("https://cardnotpresent.com/").then(function(res){
        var $ = cheerio.load(res.data);
        var articles = [];
    })
}


  
        //  this starts an object that we push to the articles array 
    //     db.Article.create(
    //       {
    //         title: title,
    //         link: link,
    //         summary: summary
    //       },
    //       function(err, inserted) {
    //         if (err) {
    //           //  log it to console
    //           console.log(err)
    //         } else {
    //           //  log inserted data
    //           console.log(inserted)
    //         }
    //       }
    //     )
    //   })
    // })
    //  if it's sucessfull, send a message so client is not waiting
//     res.send("Scrape complete!")
//   })

  module.exports = scrape;

  