app.controllers.defineController("VacanciesController", {
    actionIndex: function (req, res, db) {
        res.json({});
    },
    actionItem: function (req, res, db) {
        var cid = req.params.cid;
        res.json({});
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
        res.json({});
    },
    actionDelete: function (req, res, db) {
        var cid = req.params.cid;
        res.json({});
    },
    actionDeleteItem: function(req, res, db){
        var cid = req.params.cid;
        res.json({});
    }
});