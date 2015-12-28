var multer  =   require('multer');
var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, global._basePath + '/attacments');
    },
    filename: function (req, file, callback) {
        var fileName = file.fieldname + '-' + Date.now() + "-" + file.originalname;
        callback(null, fileName);
    }
});
var upload = multer({ storage : storage}).single('file');

app.controllers.defineController("FileController", {
    actionPhoto: function(req, res){
        upload(req, res, function(err) {
            if(err) {
                return res.json({status: false, error: "Error uploading file."});
            }
            res.json({
                status: true,
                fullfilename: '/attacments/' + req.file.filename,
                filename: req.file.originalname
            });
        });
    },

    actionResume: function(req, res){
        upload(req, res, function(err) {
            if(err) {
                return res.json({status: false, error: "Error uploading file."});
            }
            res.json({
                status: true,
                fullfilename: '/attacments/' + req.file.filename,
                filename: req.file.originalname
            });
        });
    }
});