
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
            var cid = $routeParams.cid;
            $http.get('vacancies/' + cid).success(function (data) {
                $scope.data = data;
            });

        }]
    );

    vacancies.controller('VacanciesAddController', ['$scope', '$http',
        function ($scope, $http) {
            var self = this;
            this.data  = {};

            $http.get('vacancies/add').success(function (data) {
                self.data = data;
            });

            this.onClickEdit = function(){
                $http.post('candidates/add', this.data).success(function (data) {

                });
            };

        }]
    );

    vacancies.controller('VacanciesEditController', ['$scope', '$http', '$routeParams',
        function ($scope, $http, $routeParams) {
            var cid = $routeParams.cid;
            $http.get('vacancies/' + cid + '/edit').success(function (data) {
                $scope.data = data;
            });

        }]
    );

    vacancies.controller('VacanciesDeleteController', ['$scope', '$http', '$routeParams',
        function ($scope, $http, $routeParams) {
            var cid = $routeParams.cid;
            $http.get('vacancy/' + cid + '/delete').success(function (data) {
                $scope.data = data;
            });

            this.onClickDelete = function(){
                $http.delete('vacancy/' + cid + '/delete').success(function (data) {

                });
            };

        }]
    );
})();