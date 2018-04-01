//  here I am exporting both files here 
//  so that in server file i just require this one

module.exports = {
    Article: require("./article"),
    Comment: require("./comment")
};

console.log("This is BOTH article and comment");
 
