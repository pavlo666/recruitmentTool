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
            attachment_path: post.attachment_path
        });
        candidate.save(function (err) {
            console.log("Error:",err);
        });

        res.json({});
    },
    actionEdit: function (req, res) {
        var cid = req.params.cid;
        db.connect();

        db.query('SELECT cn.* FROM candidates AS cn WHERE cn.cid = ' + cid + ' LIMIT 1', function (err, rows, fields) {
            if (err) throw err;
            res.json(rows[0]);
        });
        db.end();
    },
    actionDelete: function (req, res) {
        var cid = req.params.cid;
        app.models.CandidateModel.findById(cid, function (err, article) {
            res.json({_id: cid, title: article.first_name});
        });
    },
    actionDeleteItem: function(req, res){
        var cid = req.params.cid;
        console.log("item "+cid+" deleted");
        res.json({});
    }
});