app.controllers.defineController("FeedbackController", {
    actionIndex: function (req, res) {
        app.models.FeedbackModel.find(true, function (err, article) {
            res.json(article);
        });
    },
    actionItem: function (req, res) {
        var fid = req.params.fid;
        app.models.FeedbackModel.findById(fid, function (err, article) {
            res.json(article);
        });
    },

    actionJoinToEmployee: function(req, res){
        res.json({status: true});
    },

    actionAdd: function (req, res) {
        var cid = req.params.cid;
        app.models.CandidateModel.findById(cid, function (err, article) {
            if (article) {
                var feedback = new app.models.FeedbackModel();
                feedback.cid = cid;
                res.json({status: true,
                    cid: cid, name: article.first_name + " " + article.second_name + " " + article.last_name,
                    feedback: feedback
                });
            } else {
                res.json({status: false});
            }
        });
    },
    actionAddItem: function (req, res ) {
        var post = req.body;
        var feedback = new app.models.FeedbackModel();
        feedback.uid = 1;
        feedback.cid = post.cid;
        feedback.content = post.content;
        feedback.is_private = !!post.is_private;
        feedback.resolution = post.resolution;
        feedback.save(function(result){
            res.json({status: true, result: result});
        });
    },
    actionEdit: function (req, res) {
        res.json({status: true});
    },

    actionEditItem: function (req, res) {
        res.json({status: true});
    },
    actionDelete: function (req, res) {
        res.json({status: true});
    },
    actionDeleteItem: function(req, res){
        res.json({status: true});
    }
});