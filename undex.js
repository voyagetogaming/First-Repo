const express = require("express")
const {createUserRoutes} = require("./users");
const {createCourseRoutes} = require("./course");
const app = express();
createCourseRoutes(app);
createUserRoutes(app);
 app.listen(3000);
