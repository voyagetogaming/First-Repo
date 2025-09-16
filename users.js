const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signup", function(req, res) {
  res.json({
    msg: "bhaaoi"
  });
});

userRouter.post("/signin", function(req, res) {
  res.json({
    msg: "bhaaoi"
  });
});

userRouter.get("/purchases", function(req, res) {
  res.json({
    msg: "bhaaoi"
  });
});

// Fixed export: Use 'userRouter' to match the destructuring in index.js
module.exports = {
  userRouter: userRouter  // Or simply: userRouter (shorthand)
};