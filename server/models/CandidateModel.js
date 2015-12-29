
(function(){
    var Schema = mongoose.Schema;

    var Candidate = new Schema({
        first_name: { type: String, default: "" },
        second_name: { type: String, default: "" },
        last_name: { type: String, default: "" },
        expect_salary: { type: Number, default: 0 },
        current_position: { type: String, default: "" },
        location: { type: String, default: "UA" },
        ready_to_join : {
            time: { type: Number, default: 0 },
            time_type: { type: String, default: "day(s)" }
        },
        current_start_date: {
            month: { type: Number, default: 0 },
            year: { type: Number, default: 2015 }
        },
        no_it_experience: { type: Boolean, default: false },
        summery: { type: String, default: "" },
        attachment: {
            path: { type: String, default: "" },
            name: { type: String, default: "" }
        },
        photo_path: {
            path: { type: String, default: "" },
            name: { type: String, default: "" }
        },
        skills: { type: Array },
        isEmployee: { type: Boolean, default: false },
        employee: {
            birthday: { type: String, default: "" },
            address: { type: String, default: "" },
            postal_code: { type: String, default: null },
            email: { type: String, default: "" },
            url_linkedin: { type: String, default: "" },
            url_social_network: { type: String, default: "" },
            skype: { type: String, default: "" }
        }
    });

    var CandidateModel = mongoose.model('Candidate', Candidate);

    app.models.defineModel("CandidateModel", CandidateModel);
})();