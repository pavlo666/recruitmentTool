
(function(){
    'use strict';
    var site = angular.module('SiteModule', []);

    site.controller('SiteController', ['$scope', '$http',
        function ($scope, $http) {
            var self = this;
            self.user = {};
            self.isAnonymouse = true;

            $http.get('userStatus').success(function (data) {
                self.user = data;
                self.isAnonymouse = data.role === 'anonymouse';
            });

            this.onClickLogout = function () {
                self.user = {};
                self.isAnonymouse = true;
            }
        }]);

    site.controller('LoginController', ['$scope', '$http', '$location',
        function ($scope, $http, $location) {
            var self = this;
            this.authMsg = "";
            $http.get('login').success(function (data) {
                $scope.data = data;
            });

            this.onClickLogin = function(){
                $http.post('login/user', $scope.data.account).success(function (data) {
                    if (data.status === true) {
                        $location.path( "/" );
                    } else {
                        self.authMsg = data.error;
                    }
                });
            };
        }]);

    site.controller('RegisterController', ['$scope', '$http', '$location',
        function ($scope, $http, $location) {
            $scope.data = {
                login: "",
                password: "",
                username: "",
                password_repeat: ""
            };

            this.onClickRegister = function(){
                $http.post('register', $scope.data).success(function (data) {
                    if (data.status === true) {
                        $location.path( "/" );
                    } else {
                        self.authMsg = data.error;
                    }
                });
            };
        }]);
})();