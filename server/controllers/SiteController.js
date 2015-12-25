
app.controllers.defineController("SiteController", {
    actionIndex: function(req, res){
        res.render('index', { title: 'Hey', message: 'Hello there!'});
    },

    actionUserStatus: function(req, res){
        res.json(req.session.user);
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
                        status: false,
                        error: "User does not exist!"
                    });
                }
            } else {
                res.json({
                    status: false,
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
    },
    actionRegister: function(req, res){
        var post = req.body;
        var user = new app.models.UserModel({
            login: post.login,
            password: post.password,
            username: post.username,
            role: "user"
        });
        user.save(function (err) {
            res.json({
                status: !err,
                err: err
            });
        });
    },
    actionFileUpload: function (req, res) {
        console.log(Object.keys(req).sort());
        res.json({});
    },
    actionInstall: function(req, res){
        async.parallel([
            function(callback){
                var user = new app.models.UserModel({
                    login: "admin",
                    password: "admin",
                    username: "admin",
                    role: "admin"
                });
                user.save(function (err) {
                    console.log("Admin added");
                    callback("Admin added");
                });
            },
            function(callback){
                var user = new app.models.UserModel({
                    login: "user",
                    password: "user",
                    username: "user",
                    role: "user"
                });
                user.save(function (err) {
                    console.log("User added");
                    callback("User added");
                });
            }],
            function(err, results){
                res.send('Installed');
            });
    }
});