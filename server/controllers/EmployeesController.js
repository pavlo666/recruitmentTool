app.controllers.defineController("EmployeesController", {
    actionEdit: function (req, res) {
        var cid = req.params.cid;
        app.models.CandidateModel.findById(cid, function (err, article) {
            res.json(article);
        });
    },
    actionEditItem: function (req, res) {
        var cid = req.params.cid;
        var post = req.body;
        app.models.CandidateModel.findById(cid, function (err, article) {
            if (article) {
                if (article.isEmployee) {
                    article.employee.birthday = post.employee.birthday;
                    article.employee.address = post.employee.address;
                    article.employee.email = post.employee.email;
                    article.employee.postal_code = post.employee.postal_code;
                    article.employee.url_linkedin = post.employee.url_linkedin;
                    article.employee.url_social_network = post.employee.url_social_network;
                    article.employee.skype = post.employee.skype;
                    article.save(function(){
                        res.json({status: true});
                    });
                }
            } else {
                res.json({status: false});
            }

        });
    }
});