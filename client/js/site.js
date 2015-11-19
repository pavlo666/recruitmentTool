
(function(){
    'use strict';

    var app = angular.module('app', [
        'ngRoute',
        'CandidatesModule',
        'VacanciesModule',
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
                    templateUrl: 'view/candidates/edit.ejs',
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
                otherwise({
                    redirectTo: '/'
                });
        }]);
})();