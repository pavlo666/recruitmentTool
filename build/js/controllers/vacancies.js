
(function(){
    'use strict';
    var vacancies = angular.module('VacanciesModule', []);

    vacancies.controller('VacanciesListController', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('vacancies').success(function (data) {
                $scope.data = data;
            });
        }]);
})();