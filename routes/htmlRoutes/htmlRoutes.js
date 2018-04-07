
// // dependencies 
// const path = require("path");

// //  routing to home page 

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname ,"../../public/index.html"))
// });

var router = require("express").Router();

router.get("/", function(req, res){
    res.render("index");
})

module.exports = router;