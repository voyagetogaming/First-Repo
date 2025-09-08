function createUserRoutes(app){
        app.post("/users/signup", function(req,res){
            res.json({
                msg:"bhaaoi"
            })
        })
        app.post("/users/signin", function(req,res){
            res.json({
                msg:"bhaaoi"
            })
        })
        app.get("/users/purchases", function(req,res){
            res.json({
                msg:"bhaaoi"
            })
        })
}
module.exports = {
        createUserRoutes: createUserRoutes
}