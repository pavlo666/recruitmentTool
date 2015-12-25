
app.controllers.defineController("FileController", {
    actionPhoto: function(req, res){
        console.log(Object.keys(req).sort());
        console.log(req.body);
        res.json({});
    }
});