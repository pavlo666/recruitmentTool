
app.controllers.defineController("SiteController", {
    actionIndex: function(req, res){
        /*app.models.UserModel.findById('5638aee76bb433981dc97ccd', function (err, article) {
            console.log("RES::",err, article);
        });*/

        res.render('index', { title: 'Hey', message: 'Hello there!'});
    },
    actionLogin: function(req, res){
        /*var user = new app.models.UserModel({
            name: "Taras2"
        });
        user.save(function (err) {
            console.log("Error:",err);
        });*/

        res.json({});
    }
});