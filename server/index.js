var ejs = require('ejs');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var async = require('async');
var app = express();
global.app = app;
global.async = async;
global._basePath = __dirname + "/";

global.mongoose    = require('mongoose');


app.set('views', _basePath + '../client/view');
app.set('view engine', 'ejs');

var cn = require('controller');
app.controllers = cn.controllers;
app.models = cn.models;
app.types = cn.types;

require(_basePath + 'models/SkillModel');
require(_basePath + 'models/UserModel');
require(_basePath + 'models/EmployeeModel');
require(_basePath + 'models/FeedbackModel');
require(_basePath + 'models/CandidateModel');
require(_basePath + 'models/VacancyModel');

require(_basePath + 'controllers/FileController');
require(_basePath + 'controllers/FeedbackController');
require(_basePath + 'controllers/CandidatesController');
require(_basePath + 'controllers/VacanciesController');
require(_basePath + 'controllers//EmployeesController');
require(_basePath + 'controllers/SiteController');

app.use(bodyParser.json());

//app.use(express.cookieParser());
app.use(session({secret: 'reqrutment123'}));

app.use("/attacments", express.static(_basePath + '/attacments'));
app.use(express.static(_basePath + '../client'));
app.use(express.static(_basePath + '../node_modules/angular'));
app.use(express.static(_basePath + '../node_modules/angular-route'));
app.use(express.static(_basePath + '../node_modules/angular-mocks'));

app.controllers.createWebApplication({
    db: {
        host: 'localhost',
        database: 'recrutment_db',
        user: 'root',
        password: '',
        charset: 'utf8'
    },
    urlManager: [
        {
            url: "/",
            method: "get",
            path: ["site", "index"],
            roles: ["*"]
        },
        {
            url: "/userStatus",
            method: "get",
            path: ["site", "userStatus"],
            roles: ["*"]
        },
        {
            url: "/login",
            method: "get",
            path: ["site", "login"],
            roles: ["anonymouse"]
        },
        {
            url: "/login/user",
            method: "post",
            path: ["site", "loginUser"],
            roles: ["anonymouse"]
        },
        {
            url: "/login/user",
            method: "post",
            path: ["site", "loginUser"],
            roles: ["anonymouse"]
        },
        {
            url: "/register",
            method: "post",
            path: ["site", "register"],
            roles: ["anonymouse"]
        },
        {
            url: "/file/photo",
            method: "post",
            path: ["file", "photo"],
            roles: ["anonymouse"]
        },
        {
            url: "/file/resume",
            method: "post",
            path: ["file", "resume"],
            roles: ["anonymouse"]
        },
        {
            url: "/install",
            method: "get",
            path: ["site", "install"],
            roles: ["anonymouse"]
        },
        //<editor-fold desc="Url Manager: Candidates">
        {
            url: '/candidates',
            method: "get",
            path: ["candidates", "index"],
            roles: ["*"]
        },
        {
            url: '/candidates/add',
            method: "get",
            path: ["candidates", "add"],
            roles: ["*"]
        },
        {
            url: '/candidates/add',
            method: "post",
            path: ["candidates", "addItem"],
            roles: ["*"]
        },
        {
            url: '/candidate/:cid',
            method: "get",
            path: ["candidates", "item"],
            roles: ["*"]
        },
        {
            url: '/candidate/:cid/joint_to_employee',
            method: "post",
            path: ["candidates", "joinToEmployee"],
            roles: ["*"]
        },
        {
            url: '/candidate/:cid/edit',
            method: "get",
            path: ["candidates", "edit"],
            roles: ["*"]
        },
        {
            url: '/candidate/:cid/edit',
            method: "post",
            path: ["candidates", "editItem"],
            roles: ["*"]
        },
        {
            url: '/candidate/:cid/delete',
            method: "get",
            path: ["candidates", "delete"],
            roles: ["*"]
        },
        {
            url: '/candidate/:cid/delete',
            method: "post",
            path: ["candidates", "deleteItem"],
            roles: ["*"]
        },
        //</editor-fold>
        //<editor-fold desc="Url Manager: Feedbacks">
        {
            url: '/feedbacks',
            method: "get",
            path: ["feedback", "index"],
            roles: ["*"]
        },
        {
            url: '/feedbacks/add/:cid',
            method: "get",
            path: ["feedback", "add"],
            roles: ["*"]
        },
        {
            url: '/feedbacks/add/:cid',
            method: "post",
            path: ["feedback", "addItem"],
            roles: ["*"]
        },
        {
            url: '/feedback/:fid',
            method: "get",
            path: ["feedback", "item"],
            roles: ["*"]
        },
        {
            url: '/feedback/:fid/edit',
            method: "get",
            path: ["feedback", "edit"],
            roles: ["*"]
        },
        {
            url: '/feedback/:fid/edit',
            method: "post",
            path: ["feedback", "editItem"],
            roles: ["*"]
        },
        {
            url: '/feedback/:fid/delete',
            method: "get",
            path: ["feedback", "delete"],
            roles: ["*"]
        },
        {
            url: '/feedback/:fid/delete',
            method: "delete",
            path: ["feedback", "deleteItem"],
            roles: ["admin"]
        },
        //</editor-fold>
        //<editor-fold desc="Url Manager: Vacancies">
        {
            url: '/vacancies',
            method: "get",
            path: ["vacancies", "index"],
            roles: ["*"]
        },
        {
            url: '/vacancies/add',
            method: "get",
            path: ["vacancies", "add"],
            roles: ["*"]
        },
        {
            url: '/vacancies/add',
            method: "post",
            path: ["vacancies", "addItem"],
            roles: ["*"]
        },
        {
            url: '/vacancy/:vid',
            method: "get",
            path: ["vacancies", "item"],
            roles: ["*"]
        },
        {
            url: '/vacancy/:vid/edit',
            method: "get",
            path: ["vacancies", "edit"],
            roles: ["*"]
        },
        {
            url: '/vacancy/:vid/edit',
            method: "post",
            path: ["vacancies", "editItem"],
            roles: ["*"]
        },
        {
            url: '/vacancy/:vid/delete',
            method: "get",
            path: ["vacancies", "delete"],
            roles: ["*"]
        },
        {
            url: '/vacancy/:vid/delete',
            method: "delete",
            path: ["vacancies", "deleteItem"],
            roles: ["admin"]
        },
        //</editor-fold>
        //<editor-fold desc="Url Manager: Employees">
        {
            url: '/employee/:cid/edit',
            method: "get",
            path: ["employees", "edit"],
            roles: ["*"]
        },
        {
            url: '/employee/:cid/edit',
            method: "post",
            path: ["employees", "editItem"],
            roles: ["*"]
        }
        //</editor-fold>
    ]
}).start(app);


var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

});
