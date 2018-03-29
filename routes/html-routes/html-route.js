
// dependencies 
const path = require("path");

//  routing to home page 

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname ,"../../public/index.html"))
});