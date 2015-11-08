
(function(){
    'use strict';
    var site = angular.module('SiteModule', []);

    site.controller('LoginController', ['$scope', '$http', '$location',
        function ($scope, $http, $location) {
            $http.get('login').success(function (data) {
                $scope.data = data;
            });

            this.onClickLogin = function(){
                $http.post('login/user', $scope.data.account).success(function (data) {
                    //$location.path( "/" );
                });
            };
        }]);

    site.controller('RegisterController', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('register').success(function (data) {
                $scope.data = data;
            });

            this.onClickRegister = function(){
                $http.post('register/user', this.data).success(function (data) {

                });
            };
        }]);
})();