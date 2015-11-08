
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
                //--------------------
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
                //--------------------
                when('/vacancies', {
                    templateUrl: 'view/vacancies/index.ejs',
                    controller: 'VacanciesListController'
                }).
                //--------------------
                otherwise({
                    redirectTo: '/'
                });
        }]);
})();