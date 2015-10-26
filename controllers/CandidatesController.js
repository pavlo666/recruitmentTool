app.controllers.defineController("CandidatesController", {
    actionIndex: function (req, res, db) {
        db.connect();

        db.query('SELECT cn.* FROM candidates AS cn', function (err, rows, fields) {
            if (err) throw err;
            res.json(rows);
        });
        db.end();
    },
    actionItem: function (req, res, db) {
        var cid = req.params.cid;
        db.connect();

        db.query('SELECT cn.* FROM candidates AS cn WHERE cn.cid = ' + cid + ' LIMIT 1', function (err, rows, fields) {
            if (err) throw err;

            res.json(rows[0]);
        });
        db.end();
    },
    actionAdd: function (req, res, db) {
        res.json({
            "cid": 0,
            "firstname": "",
            "secondname": "",
            "lastname": "",
            "expect_salary": 0,
            "current_position": "",
            "location": "",
            "ready_to_join_in": '',
            "ready_to_join_in_type": "day(s)",
            "carrent_start_date": "",
            "no_it_experience": false,
            "summery": '',
            "attachment_path": ''});
    },
    actionAddItem: function (req, res, db) {
        console.log(req.query, req.body);
        //insert item
        res.json({});
    },
    actionEdit: function (req, res, db) {
        var cid = req.params.cid;
        db.connect();

        db.query('SELECT cn.* FROM candidates AS cn WHERE cn.cid = ' + cid + ' LIMIT 1', function (err, rows, fields) {
            if (err) throw err;
            res.json(rows[0]);
        });
        db.end();
    },
    actionDelete: function (req, res, db) {
        var cid = req.params.cid;
        db.connect();

        db.query('SELECT cn.* FROM candidates AS cn WHERE cn.cid = ' + cid + ' LIMIT 1', function (err, rows, fields) {
            if (err) throw err;
            res.json(rows[0]);
        });
        db.end();
    },
    actionDeleteItem: function(req, res, db){
        var cid = req.params.cid;
        console.log("item "+cid+" deleted");
        res.json({});
    }
});