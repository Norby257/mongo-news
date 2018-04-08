console.log("we are linked");
//  front end file 

//  get article title, link and display to page 
$.getJSON("/articles/articles", function(data){
    //  for each article avail
    for (var i = 0; i < data.length; i++) {
         
        $("#articles").append("<p data-id=' " + data[i]._id + " '>" + data[i].title+ "<br />" + data[i].link + "</p>");
        $("#articles").append($("<button> Comment </button>"));
        
    }
});


//  click event for the p tag
$(document).on("click", "p", function() {
    $("#comments").empty();
    var thisId = $(this).attr("data-id");

//  start AJAX - for the specific article
//  getting server 500 error?
$.ajax({
    method: "GET",
    url: `/articles/${thisId}`
}) 

//  add comment info to page 
.then(function(data){
    console.log(data);
    //  append article title 
   $ ("#comments").append("<h2>" + data.title + "</h2");
   //   input to add body for comment 
   $("#comments").append("<textarea id='bodyinput' name='body>'</textarea>")
   //   a new button to post your comment to the article
   $("#comments").append("<button data-id='" + data._id + "' id='savecomment'>Save Comment</button>");
   //   a new button to delete your comment to the article 
   $("#comments").append("<button data-id='" + data._id + "' id='deletecomment'>Delete Comment</button>")
   
})

//  if a comment exists 
if (data.comment) {
    $("#bodyinput").val(data.note.body);
//  put body of comment in body area 
}
})
//  on click event for save comment 
$(document).on("click", "#savecomment", function() {
    //  id of comment 
    var thisId = $(this).attr("data-id");


//  AJAX post route 
$.ajax({
    method: "POST",
    url: "/articles/" + thisId,
    data: {
        body: $("#bodyinput").val()
    }
})
.then(function(data){
    console.log(data);
    //  clear the comments section
    $("#comments").empty();
})

//  removing text values of input 
$("#bodyinput").val("");

//  AJAX delete route for deleting a comment 
$.ajax({
    method: "DELETE",
    url:  "/articles/" + thisId,
    success: "callback function here "
})

})