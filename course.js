function createCourseRoutes(app){
    app.post("/course/purchase", function (req,res){
        res.json({
            msg:"krishna"
        })
    })
    app.get("/course/preview", function (req,res){
        res.json({
            msg:"bhai"
        })
    })
}
module.exports = {
    createCourseRoutes: createCourseRoutes
}