
(function(){
    'use strict';
    var vacancies = angular.module('VacanciesModule', []);

    vacancies.controller('VacanciesListController', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('vacancies').success(function (data) {
                $scope.data = data;
            });
        }]);

    vacancies.controller('VacanciesItemController', ['$scope', '$http', '$routeParams',
        function ($scope, $http, $routeParams) {
            var vid = $routeParams.vid;
            $http.get('vacancy/' + vid).success(function (data) {
                $scope.data = data;
            });

        }]
    );

    vacancies.controller('VacanciesAddController', ['$scope', '$http','$location',
        function ($scope, $http, $location) {
            var self = this;
            this.data  = {};

            $http.get('vacancies/add').success(function (data) {
                self.data = data;
            });

            this.onClickEdit = function(){
                $http.post('vacancies/add', this.data).success(function (data) {
                    $location.path( "/vacancies" );
                });
            };

        }]
    );

    vacancies.controller('VacanciesEditController', ['$scope', '$http', '$routeParams',
        function ($scope, $http, $routeParams) {
            var vid = $routeParams.vid;
            $http.get('vacancy/' + vid + '/edit').success(function (data) {
                $scope.data = data;
            });

        }]
    );

    vacancies.controller('VacanciesDeleteController', ['$scope', '$http', '$routeParams',
        function ($scope, $http, $routeParams) {
            var vid = $routeParams.vid;
            $http.get('vacancy/' + vid + '/delete').success(function (data) {
                $scope.data = data;
            });

            this.onClickDelete = function(){
                $http.delete('vacancy/' + vid + '/delete').success(function (data) {

                });
            };

        }]
    );
})();