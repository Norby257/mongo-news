console.log("we are linked");
//  front end file 

//  get article title, link and display to page 
$.getJSON("/articles/articles", function(data){
    //  for each article avail
    for (var i = 0; i < data.length; i++) {
       
        //  display that info on the page 
        //  target - append things here   
       
        $("#articles").append("<p data-id=' " + data[i]._id + " '>" + data[i].title+ "<br />" + data[i].link + "</p>");
        //  #comments 
        
    }
});


//  click event for the p tag
 

//  start AJAX - for the article 

//  add note info to page 

//  if a comment exists 

//  put comment title in title input 

//  put body of comment in body area 

//  on click event for save comment 

//  id of document 

//  AJAX post route 




