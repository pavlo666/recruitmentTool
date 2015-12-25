app.controllers.defineController("CandidatesController", {
    actionIndex: function (req, res) {
        app.models.CandidateModel.find(true, function (err, article) {
            res.json(article);
        });
    },
    actionItem: function (req, res) {
        var cid = req.params.cid;
        app.models.CandidateModel.findById(cid, function (err, article) {
            res.json(article);
        });
    },
    actionAdd: function (req, res) {
        var candidate = new app.models.CandidateModel();
        res.json(candidate);
    },
    actionAddItem: function (req, res ) {
        var post = req.body;

        var candidate = new app.models.CandidateModel({
            first_name: post.first_name,
            second_name: post.second_name,
            last_name: post.last_name,
            expect_salary: post.expect_salary,
            current_position: post.current_position,
            location: post.location,
            ready_to_join_in: post.ready_to_join_in,
            ready_to_join_in_type: post.ready_to_join_in_type,
            current_start_date: post.current_start_date,
            no_it_experience: post.no_it_experience,
            summery: post.summery,
            attachment: {
                path: post.attachment_path,
                name: "file"
            },
            skills: post.skills.split(",")
        });
        candidate.save(function (err) {
            res.json({status: true});
        });
    },
    actionEdit: function (req, res) {
        var cid = req.params.cid;
        app.models.CandidateModel.findById(cid, function (err, article) {
            res.json(article);
        });
    },
    actionDelete: function (req, res) {
        var cid = req.params.cid;
        app.models.CandidateModel.findById(cid, function (err, article) {
            if (article) {
                res.json({_id: cid, title: article.first_name});
            } else {
                res.json({_id: -1});
            }
        });
    },
    actionDeleteItem: function(req, res){
        var cid = req.params.cid;
        app.models.CandidateModel.findByIdAndRemove(cid, {}, function (err, article) {
            res.json({status: true, cid: cid});
        });
    }
});