
(function(){
    var Schema = mongoose.Schema;

    var Feedback = new Schema({
        uid: { type: String, default: "null", required: true },
        cid: { type: String, default: "null", required: true },
        content: { type: String, default: "" },
        is_private: { type: Boolean, default: false },
        resolution: { type: String, default: null },
        date_create: { type: String, default: "" },
        files: [{
            path: { type: String, default: "" },
            name: { type: String, default: "" }
        }]
    });

    var FeedbackModel = mongoose.model('FeedbackModel', Feedback);

    app.models.defineModel("FeedbackModel", FeedbackModel);
})();