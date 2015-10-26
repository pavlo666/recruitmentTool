var ejs = require('ejs');
var express = require('express');
var bodyParser = require('body-parser')
var app = express()
global.app = app;

app.set('views', '../client/view');
app.set('view engine', 'ejs');

app.controllers = require('controller');


require('./controllers/CandidatesController');
require('./controllers/VacanciesController');
require('./controllers/SiteController');

app.use(bodyParser.json());

app.use(express.static('../client'));
app.use(express.static('../node_modules/angular'));
app.use(express.static('../node_modules/angular-route'));
app.use(express.static('../node_modules/angular-mocks'));

app.controllers.createWebApplication({
    urlManager: [
        {
            url: "/",
            method: "get",
            path: ["site", "index"],
            roles: ["all"]
        },
        {
            url: "/login",
            method: "get",
            path: ["site", "login"],
            roles: ["all"]
        },
        //--------------------------
        {
            url: '/candidates',
            method: "get",
            path: ["candidates", "index"],
            roles: ["admin"]
        },
        {
            url: '/candidates/add',
            method: "get",
            path: ["candidates", "add"],
            roles: ["admin"]
        },
        {
            url: '/candidates/add',
            method: "post",
            path: ["candidates", "addItem"],
            roles: ["admin"]
        },
        {
            url: '/candidate/:cid',
            method: "get",
            path: ["candidates", "item"],
            roles: ["admin"]
        },
        {
            url: '/candidate/:cid/edit',
            method: "get",
            path: ["candidates", "edit"],
            roles: ["admin"]
        },
        {
            url: '/candidate/:cid/delete',
            method: "get",
            path: ["candidates", "delete"],
            roles: ["admin"]
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
