app.controllers.defineController("VacanciesController", {
    actionIndex: function (req, res) {
        app.models.VacancyModel.find(true, function (err, article) {
            res.json(article);
        });
    },
    actionItem: function (req, res) {
        var vid = req.params.vid;
        app.models.VacancyModel.findById(vid, function (err, article) {
            res.json(article);
        });
    },
    actionAdd: function (req, res) {
        var vacancy = new app.models.VacancyModel();
        res.json(vacancy);
    },
    actionAddItem: function (req, res) {
        var post = req.body;

        var vacancy = new app.models.VacancyModel({
            title: post.title,
            description: post.description,
            start_date: post.start_date,
            project_name: post.project_name,
            specialty: post.specialty,
            candidate_state: post.candidate_state,
            customer_name: post.customer_name,
            confidential: !!post.confidential,
            grade: post.grade,
            status: post.status
        });
        vacancy.save(function (err) {
            res.json({status: true});
        });
    },
    actionEdit: function (req, res) {
        var vid = req.params.vid;
        app.models.VacancyModel.findById(vid, function (err, article) {
            res.json(article);
        });
    },
    actionEditItem: function (req, res) {
        var vid = req.params.vid;
        var post = req.body;
        app.models.VacancyModel.findById(vid, function (err, article) {
            if (article) {
                article.title = post.title;
                article.description = post.description;
                article.start_date = post.start_date;
                article.project_name = post.project_name;
                article.specialty = post.specialty;
                article.candidate_state = post.candidate_state;
                article.customer_name = post.customer_name;
                article.confidential = !!post.confidential;
                article.grade = post.grade;
                article.status = post.status;
                article.save(function(){
                    res.json({status: true});
                });
            } else {
                res.json({status: false});
            }
        });
    },
    actionDelete: function (req, res) {
        var vid = req.params.vid;
        app.models.VacancyModel.findById(vid, function (err, article) {
            if (article) {
                res.json({_id: vid, title: article.title});
            } else {
                res.json({_id: -1});
            }
        });
    },
    actionDeleteItem: function(req, res){
        var vid = req.params.vid;
        res.json({});
    }
});