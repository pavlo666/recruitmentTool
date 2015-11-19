
(function(){
    var Schema = mongoose.Schema;

    var Vacancy = new Schema({
        title: { type: String },
        description: { type: String, required: true },
        start_date: { type: String, required: true },
        project_name: { type: String, default: "anonymouse", required: true },
        specialty: { type: String },
        candidate_state: { type: String },//'shadow','forecasted','billed'
        customer_name: { type: String },
        confidential: { type: Boolean, default: false },
        grade: { type: String },
        status: { type: String }//'cloned','postponed','invalid','active'
    });

    var VacancyModel = mongoose.model('Vacancy', Vacancy);
    app.models.defineModel("VacancyModel", VacancyModel);
})();
