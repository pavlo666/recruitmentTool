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
        var employee = new app.models.EmployeeModel();

        res.json({
            employee: employee
        });
    },
    actionAddItem: function (req, res) {
        var post = req.body;

        var employee = new app.models.EmployeeModel({
            cid: post.cid,
            birthday: post.birthday,
            address: post.address,
            postal_code: post.postal_code * 1,
            url_linkedin: post.url_linkedin,
            url_social_network: post.url_social_network
        });
        employee.save(function (err) {
            res.json({status: true,err:err});
        });
        //insert item
        //res.json({});
    },
    actionEdit: function (req, res) {
        var vid = req.params.vid;
        res.json({});
    },
    actionEditItem: function (req, res) {
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