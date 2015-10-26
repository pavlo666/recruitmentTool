
app.controllers.defineController("SiteController", {
    actionIndex: function(req, res){


        res.render('index', { title: 'Hey', message: 'Hello there!'});
    },
    actionLogin: function(req, res){


        res.json({});
    }
});