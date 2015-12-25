app.controllers.defineController("EmployeesController", {
    actionIndex: function (req, res) {
        app.models.EmployeeModel.find(true, function (err, article) {
            res.json(article);
        });
    },
    actionItem: function (req, res) {
        var vid = req.params.vid;
        app.models.EmployeeModel.findById(vid, function (err, article) {
            res.json(article);
        });
    },
    actionAdd: function (req, res) {
        var vacancy = new app.models.EmployeeModel();
        res.json(vacancy);
    },
    actionAddItem: function (req, res) {
        console.log(req.query, req.body);
        //insert item
        res.json({});
    },
    actionEdit: function (req, res) {
        var vid = req.params.vid;
        res.json({});
    },
    actionDelete: function (req, res) {
        var vid = req.params.vid;
        res.json({});
    },
    actionDeleteItem: function(req, res){
        var vid = req.params.vid;
        res.json({});
    }
});