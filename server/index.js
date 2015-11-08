var ejs = require('ejs');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
global.app = app;
global._basePath = __dirname + "/";

global.mongoose    = require('mongoose');


app.set('views', _basePath + '../client/view');
app.set('view engine', 'ejs');

var cn = require('controller');
app.controllers = cn.controllers;
app.models = cn.models;

require(_basePath + 'models/UserModel');
require(_basePath + 'models/CandidateModel');

require(_basePath + 'controllers/CandidatesController');
require(_basePath + 'controllers/VacanciesController');
require(_basePath + 'controllers/SiteController');

app.use(bodyParser.json());

//app.use(express.cookieParser());
app.use(session({secret: 'reqrutment123'}));

app.use(express.static(_basePath + '../client'));
app.use(express.static(_basePath + '../node_modules/angular'));
app.use(express.static(_basePath + '../node_modules/angular-route'));
app.use(express.static(_basePath + '../node_modules/angular-mocks'));

app.controllers.createWebApplication({
    urlManager: [
        {
            url: "/",
            method: "get",
            path: ["site", "index"],
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
        //--------------------------
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
            url: '/candidate/:cid/edit',
            method: "get",
            path: ["candidates", "edit"],
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
            method: "delete",
            path: ["candidates", "deleteItem"],
            roles: ["admin"]
        },
        //--------------------------
        {
            url: '/vacancies',
            method: "get",
            path: ["vacancies", "index"],
            roles: ["admin"]
        }
    ],
    db: {
        host: 'localhost',
        database: 'recrutment_db',
        user: 'root',
        password: '',
        charset: 'utf8'
    }

}).start(app);


var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

});
