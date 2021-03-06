
(function(){
    'use strict';
    var candidates = angular.module('CandidatesModule', []);

    candidates.controller('CandidatesListController', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('candidates').success(function (data) {
                $scope.data = data;
            });


        }]);

    candidates.controller('CandidatesItemController', ['$scope', '$http', '$routeParams', '$location', '$route',
        function ($scope, $http, $routeParams, $location,$route) {
            var cid = $routeParams.cid;
            var self = this;
            $http.get('candidate/' + cid).success(function (data) {
                $scope.data = data.candidate;
                $scope.feedbacks = data.feedbacks;
            });

            this.formatDate = function(value){
                return (new Date(value)).toLocaleString();
            };

            this.joinToEmployee = function(){
                $http.post('candidate/' + cid + '/joint_to_employee', this.data).success(function (data) {
                    $location.path( "/candidate/" + cid );
                    $route.reload();
                });
            };
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

            $scope.uploadPhoto = function(){
                var file = $scope.myFile;
                $scope.candidate_photo = file.name;

                var uploadUrl = "/file/photo";
                fileUpload.uploadFileToUrl(file, uploadUrl, function(data){
                    if (data.status) {
                        $scope.data.photo_path.path = data.fullfilename;
                        $scope.data.photo_path.name = data.filename;
                    }
                });
            };

            $scope.uploadResume = function(){
                var file = $scope.myAttachment;
                $scope.candidate_resume = file.name;

                var uploadUrl = "/file/resume";
                fileUpload.uploadFileToUrl(file, uploadUrl, function(data){
                    if (data.status) {
                        $scope.data.attachment.path = data.fullfilename;
                        $scope.data.attachment.name = data.filename;
                    }
                });
            };

            this.onClickEdit = function(){
                if (!Array.isArray($scope.data.skills)) {
                    $scope.data.skills = $scope.data.skills.split(",");
                }
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
                $http.post('candidate/' + cid + '/delete').success(function (data) {
                    $location.path( "/candidates" );
                });
            };

        }]
    );

})();