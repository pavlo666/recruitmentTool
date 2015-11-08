
(function(){
    var Schema = mongoose.Schema;

    var User = new Schema({
        login: { type: String, required: true },
        password: { type: String, required: true },
        username: { type: String, required: true },
        role: { type: String, default: "anonymouse", required: true }
    });

    var UserModel = mongoose.model('User', User);
    app.models.defineModel("UserModel", UserModel);
})();
