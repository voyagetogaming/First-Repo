const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/purchase", function(req, res) {
  res.json({
    msg: "signup endpoint "
  });
});

courseRouter.get("/preview", function(req, res) {
  res.json({
    msg: "signup endpoint "
  });
});

// Export is already correct
module.exports = {
  courseRouter: courseRouter  // Or simply: courseRouter (shorthand)
};