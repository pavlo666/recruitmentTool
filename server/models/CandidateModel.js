
(function(){
    var Schema = mongoose.Schema;

    var Candidate = new Schema({
        first_name: { type: String },
        second_name: { type: String },
        last_name: { type: String },
        expect_salary: { type: Number },
        current_position: { type: String },
        location: { type: String },
        ready_to_join_in: { type: Number },
        ready_to_join_in_type: { type: String },
        current_start_date: { type: Number },
        no_it_experience: { type: Number },
        summery: { type: String },
        attachment_path: { type: String }
    });

    var CandidateModel = mongoose.model('Candidate', Candidate);
    app.models.defineModel("CandidateModel", CandidateModel);
})();