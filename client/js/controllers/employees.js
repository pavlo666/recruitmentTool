(function(){
    'use strict';
    var employees = angular.module('EmployeesModule', []);

    employees.controller('EmployeesEditController', ['$scope', '$http', '$routeParams', '$location',
        function ($scope, $http, $routeParams, $location) {
            var cid = $routeParams.cid;
            $http.get('employee/' + cid + '/edit').success(function (data) {
                $scope.data = data;
            });

            this.onClickEdit = function(){
                $http.post('employee/' + cid + '/edit', $scope.data).success(function (data) {
                    $location.path( "/candidate/" + cid );
                });
            };
        }]
    );
})();