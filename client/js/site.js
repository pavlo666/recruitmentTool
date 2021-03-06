
(function(){
    'use strict';

    var app = angular.module('app', [
        'ngRoute',
        'FeedbackModule',
        'CandidatesModule',
        'VacanciesModule',
        'EmployeesModule',
        'SiteModule'
    ]);

    app.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/login', {
                    templateUrl: 'view/site/login.ejs',
                    controller: 'LoginController'
                }).
                when('/register', {
                    templateUrl: 'view/site/register.ejs',
                    controller: 'RegisterController'
                }).
                //<editor-fold desc="Url Manager: Candidates">
                when('/candidates', {
                    templateUrl: 'view/candidates/index.ejs',
                    controller: 'CandidatesListController'
                }).
                when('/candidates/add', {
                    templateUrl: 'view/candidates/add.ejs',
                    controller: 'CandidatesAddController'
                }).
                when('/candidate/:cid/edit', {
                    templateUrl: 'view/candidates/edit.ejs',
                    controller: 'CandidatesEditController'
                }).
                when('/candidate/:cid/delete', {
                    templateUrl: 'view/candidates/delete.ejs',
                    controller: 'CandidatesDeleteController'
                }).
                when('/candidate/:cid', {
                    templateUrl: 'view/candidates/item.ejs',
                    controller: 'CandidatesItemController'
                }).
                //</editor-fold>
                //<editor-fold desc="Url Manager: Employees">
                when('/employee/:cid/edit', {
                    templateUrl: 'view/employees/edit.ejs',
                    controller: 'EmployeesEditController'
                }).
                //</editor-fold>
                //<editor-fold desc="Url Manager: Vacancies">
                when('/vacancies', {
                    templateUrl: 'view/vacancies/index.ejs',
                    controller: 'VacanciesListController'
                }).
                when('/vacancies/add', {
                    templateUrl: 'view/vacancies/edit.ejs',
                    controller: 'VacanciesAddController'
                }).
                when('/vacancy/:vid/edit', {
                    templateUrl: 'view/vacancies/edit.ejs',
                    controller: 'VacanciesEditController'
                }).
                when('/vacancy/:vid/delete', {
                    templateUrl: 'view/vacancies/delete.ejs',
                    controller: 'VacanciesDeleteController'
                }).
                when('/vacancy/:vid', {
                    templateUrl: 'view/vacancies/item.ejs',
                    controller: 'VacanciesItemController'
                }).
                //</editor-fold>
                //<editor-fold desc="Url Manager: Feedbacks">
                when('/feedbacks', {
                    templateUrl: 'view/feedbacks/index.ejs',
                    controller: 'FeedbackListController'
                }).
                when('/feedbacks/add/:cid', {
                    templateUrl: 'view/feedbacks/add.ejs',
                    controller: 'FeedbackAddController'
                }).
                when('/feedbacks/:fid/edit', {
                    templateUrl: 'view/feedbacks/edit.ejs',
                    controller: 'FeedbackEditController'
                }).
                when('/vacancy/:fid/delete', {
                    templateUrl: 'view/feedbacks/delete.ejs',
                    controller: 'FeedbackDeleteController'
                }).
                when('/feedback/:fid', {
                    templateUrl: 'view/feedbacks/item.ejs',
                    controller: 'FeedbackItemController'
                }).
                //</editor-fold>
                otherwise({
                    redirectTo: '/'
                });
        }]);
})();