var router = require("express").Router();

var articleRouter = require("./apiRoutes/apiRoutes");
var htmlRouter = require("./htmlRoutes/htmlRoutes");

router.use("/articles", articleRouter);
router.use("/", htmlRouter);

module.exports = router;