
(function(){
    'use strict';
    var candidates = angular.module('CandidatesModule', []);

    candidates.controller('CandidatesListController', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('candidates').success(function (data) {
                $scope.data = data;
            });


        }]);

    candidates.controller('CandidatesItemController', ['$scope', '$http', '$routeParams',
        function ($scope, $http, $routeParams) {
            var cid = $routeParams.cid;
            $http.get('candidate/' + cid).success(function (data) {
                $scope.data = data;
            });

        }]
    );

    candidates.controller('CandidatesAddController', ['$scope', '$http',
        function ($scope, $http) {
            var self = this;
            this.data  = {};

            $http.get('candidates/add').success(function (data) {
                self.data = data;
            });

            this.onClickEdit = function(){
                $http.post('candidates/add', this.data).success(function (data) {

                });
            };

        }]
    );

    candidates.controller('CandidatesEditController', ['$scope', '$http', '$routeParams',
        function ($scope, $http, $routeParams) {
            var cid = $routeParams.cid;
            $http.get('candidates/' + cid + '/edit').success(function (data) {
                $scope.data = data;
            });

        }]
    );

    candidates.controller('CandidatesDeleteController', ['$scope', '$http', '$routeParams',
        function ($scope, $http, $routeParams) {
            var cid = $routeParams.cid;
            $http.get('candidate/' + cid + '/delete').success(function (data) {
                $scope.data = data;
            });

            this.onClickDelete = function(){
                $http.delete('candidate/' + cid + '/delete').success(function (data) {

                });
            };

        }]
    );

})();