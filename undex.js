const express = require("express");
const { userRouter } = require("./routes/users");
const { courseRouter } = require("./routes/course");

const app = express();

// Middleware to parse JSON bodies (needed for POST requests like /signup)
app.use(express.json());

// Mount routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/course", courseRouter);

// Start server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});