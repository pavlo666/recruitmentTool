
(function(){
    var Schema = mongoose.Schema;

    var Skill = new Schema({
        name: { type: String }
    });

    var SkillModel = mongoose.model('Skill', Skill);
    app.models.defineModel("SkillModel", SkillModel);
})();