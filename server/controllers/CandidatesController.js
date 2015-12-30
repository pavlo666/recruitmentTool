app.controllers.defineController("CandidatesController", {
    actionIndex: function (req, res) {
        app.models.CandidateModel.find(true, function (err, article) {
            res.json(article);
        });
    },
    actionItem: function (req, res) {
        var cid = req.params.cid;
        async.parallel([
            function(callback){
                app.models.CandidateModel.findById(cid, function (err, article) {
                    if (article) {
                        callback(null, article);
                    } else {
                        callback("Error");
                    }
                });
            },
            function(callback){
                app.models.FeedbackModel.find({cid: cid}, function (err, data) {
                    if (data) {
                        callback(null, data);
                    } else {
                        callback("Error");
                    }
                });
            }],
            function(err, results){
                res.json({
                    status: true,
                    candidate: results[0],
                    feedbacks: results[1]
                });
            }
        );
    },

    actionJoinToEmployee: function(req, res){
        var cid = req.params.cid;
        app.models.CandidateModel.findById(cid, function (err, article) {
            if (article) {
                article.isEmployee = !article.isEmployee;

                article.save(function(){
                    res.json({status: true});
                });
            } else {
                res.json({status: false});
            }

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
            photo_path: {
                path: post.photo_path.path,
                name: post.photo_path.name
            },
            skills: post.skills
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

    actionEditItem: function (req, res) {
        var cid = req.params.cid;
        var post = req.body;
        app.models.CandidateModel.findById(cid, function (err, article) {
            if (article) {
                article.first_name = post.first_name;
                article.second_name = post.second_name;
                article.last_name= post.last_name;
                article.expect_salary= post.expect_salary;
                article.current_position= post.current_position;
                article.location= post.location;
                article.ready_to_join_in= post.ready_to_join_in;
                article.ready_to_join_in_type= post.ready_to_join_in_type;
                article.current_start_date= post.current_start_date;
                article.no_it_experience= post.no_it_experience;
                article.summery= post.summery;
                article.attachment = {
                    path: post.attachment.path,
                    name: post.attachment.name
                };
                article.photo_path = {
                    path: post.photo_path.path,
                    name: post.photo_path.name
                };
                article.skills = Array.isArray(post.skills) ? post.skills : post.skills.split(",");
                article.save(function(){
                    res.json({status: true});
                });
            } else {
                res.json({status: false});
            }

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