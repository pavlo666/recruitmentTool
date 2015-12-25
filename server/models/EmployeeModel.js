
(function(){
    var Schema = mongoose.Schema;

    var Employee = new Schema({
        birthday: { type: String, default: "" },
        address: { type: String, default: "" },
        postal_code: { type: Number, default: null },
        url_linkedin: { type: String, default: "" },
        url_social_network: { type: String, default: "" }
    });

    var EmployeeModel = mongoose.model('Employee', Employee);

    app.models.defineModel("EmployeeModel", EmployeeModel);
})();