
app.controllers.defineController("SiteController", {
    actionIndex: function(req, res){
        res.render('index', { title: 'Hey', message: 'Hello there!'});
    },
    actionLogin: function(req, res){
        var user = new app.models.UserModel();
        res.json({account: user});
    },
    actionLoginUser: function(req, res){
        var post = req.body;
        app.models.UserModel.findOne({ login: post.login }, function (err, article) {
            if(article) {
                if (article.password === post.password) {
                    req.session.user = article;
                    res.json({
                        status: true
                    });
                } else {
                    res.json({
                        error: "User does not exist!"
                    });
                }
            } else {
                res.json({
                    error: "User does not exist!"
                });
            }
        });
    },
    actionLogout: function(req, res) {
        req.session.destroy(function (err) {
            if (err) {
                console.log(err);
            } else {
                res.redirect('/');
            }
        });
    }
});