(function(){
    'use strict';
    var employees = angular.module('EmployeesModule', []);

    employees.controller('EmployeesListController', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('employees').success(function (data) {
                $scope.data = data;
            });
        }]);

    employees.controller('EmployeesItemController', ['$scope', '$http', '$routeParams',
        function ($scope, $http, $routeParams) {
            var cid = $routeParams.cid;
            $http.get('employees/' + cid).success(function (data) {
                $scope.data = data;
            });

        }]
    );

    employees.controller('EmployeesAddController', ['$scope', '$http',
        function ($scope, $http) {
            var self = this;
            this.data  = {};

            $http.get('employees/add').success(function (data) {
                self.data = data;
            });

            this.onClickEdit = function(){
                $http.post('employees/add', this.data).success(function (data) {

                });
            };

        }]
    );

    employees.controller('EmployeesEditController', ['$scope', '$http', '$routeParams',
        function ($scope, $http, $routeParams) {
            var cid = $routeParams.cid;
            $http.get('employees/' + cid + '/edit').success(function (data) {
                $scope.data = data;
            });

        }]
    );

    employees.controller('EmployeesDeleteController', ['$scope', '$http', '$routeParams',
        function ($scope, $http, $routeParams) {
            var cid = $routeParams.cid;
            $http.get('employee/' + cid + '/delete').success(function (data) {
                $scope.data = data;
            });

            this.onClickDelete = function(){
                $http.delete('employee/' + cid + '/delete').success(function (data) {

                });
            };

        }]
    );
})();