
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

    candidates.controller('CandidatesAddController', ['$scope', '$http', '$location',
        function ($scope, $http, $location) {
            var self = this;
            this.data  = {};

            $http.get('candidates/add').success(function (data) {
                self.data = data;
            });

            this.onClickEdit = function(){
                $http.post('candidates/add', this.data).success(function (data) {
                    $location.path( "/candidates" );
                });
            };

        }]
    );

    candidates.directive('fileModel', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var model = $parse(attrs.fileModel);
                var modelSetter = model.assign;

                element.bind('change', function(){
                    scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            }
        };
    }]);

    candidates.service('fileUpload', ['$http', function ($http) {
        this.uploadFileToUrl = function(file, uploadUrl, callback){
            var fd = new FormData();
            fd.append('file', file);
            $http.post(uploadUrl, fd, {
                withCredentials: true,
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined }
            }).success(function(data){
                    callback(data);
            }).error(function(){});
        }
    }]);

    candidates.controller('CandidatesEditController', ['$scope', '$http', '$routeParams','$location','fileUpload',
        function ($scope, $http, $routeParams, $location, fileUpload) {
            var cid = $routeParams.cid;
            $scope.candidate_photo = "";
            $http.get('candidate/' + cid + '/edit').success(function (data) {
                $scope.data = data;
                $scope.candidate_photo = data.photo_path.name;
            });

            $scope.uploadFile = function(){
                var file = $scope.myFile;
                $scope.candidate_photo = file.name;

                var uploadUrl = "/fileUpload";
                fileUpload.uploadFileToUrl(file, uploadUrl, function(data){
                    if (data.status) {
                        $scope.data.photo_path.path = data.fullfilename;
                        $scope.data.photo_path.name = data.filename;
                    }
                });
            };

            this.onClickEdit = function(){
                $http.post('candidate/' + cid + '/edit', $scope.data).success(function (data) {
                    $location.path( "/candidate/" + cid );
                });
            };
        }]
    );

    candidates.controller('CandidatesDeleteController', ['$scope', '$http', '$routeParams', '$location',
        function ($scope, $http, $routeParams, $location) {
            var cid = $routeParams.cid;
            $http.get('candidate/' + cid + '/delete').success(function (data) {
                $scope.data = data;
                if (data._id === -1) {
                    $location.path( "/candidates" );
                }
            });

            this.onClickDelete = function(){
                $http.delete('candidate/' + cid + '/delete').success(function (data) {
                    $location.path( "/candidates" );
                });
            };

        }]
    );

})();