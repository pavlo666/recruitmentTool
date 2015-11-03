
(function(){
    var Schema = mongoose.Schema;

    var Candidate = new Schema({
        firstname: { type: String },
        secondname: { type: String },
        lastname: { type: String },
        expect_salary: { type: Number }
    });

    var CandidateModel = mongoose.model('Candidate', Candidate);
    app.models.defineModel("CandidateModel", CandidateModel);
})();