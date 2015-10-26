
(function(){
    'use strict';
    var site = angular.module('SiteModule', []);

    site.controller('login', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('login').success(function (data) {
                $scope.data = data;
            });
        }]);
})();