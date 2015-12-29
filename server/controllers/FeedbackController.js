app.controllers.defineController("FeedbackController", {
    actionIndex: function (req, res) {
        res.json({status: true});
    },
    actionItem: function (req, res) {
        res.json({status: true});
    },

    actionJoinToEmployee: function(req, res){
        res.json({status: true});
    },

    actionAdd: function (req, res) {
        res.json(candidate);
    },
    actionAddItem: function (req, res ) {
        res.json({status: true});
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