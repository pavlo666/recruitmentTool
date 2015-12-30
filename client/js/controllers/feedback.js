
(function(){
    'use strict';
    var feedback = angular.module('FeedbackModule', []);

    feedback.controller('FeedbackListController', ['$scope', '$http',
        function ($scope, $http) {
            $http.get('feedbacks').success(function (data) {
                $scope.data = data;
            });


        }]);

    feedback.controller('FeedbackItemController', ['$scope', '$http', '$routeParams', '$location', '$route',
        function ($scope, $http, $routeParams, $location,$route) {
            var fid = $routeParams.fid;
            $http.get('feedback/' + fid).success(function (data) {
                $scope.data = data;
            });
        }]
    );

    feedback.controller('FeedbackAddController', ['$scope', '$http', '$routeParams', '$location',
        function ($scope, $http, $routeParams, $location) {
            var cid = $routeParams.cid;

            $http.get('feedbacks/add/' + cid).success(function (data) {
                $scope.candidateName = data.name;
                $scope.data = data.feedback;
            });

            this.onClickEdit = function(){
                $http.post('feedbacks/add/'+ cid, $scope.data).success(function () {
                    $location.path( "/candidate/" + cid);
                });
            };

        }]
    );

    feedback.directive('fileModel', ['$parse', function ($parse) {
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

    feedback.service('fileUpload', ['$http', function ($http) {
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

    feedback.controller('FeedbackEditController', ['$scope', '$http', '$routeParams','$location','fileUpload',
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
                $http.post('candidate/' + cid + '/edit', $scope.data).success(function (data) {
                    $location.path( "/candidate/" + cid );
                });
            };
        }]
    );

    feedback.controller('FeedbackDeleteController', ['$scope', '$http', '$routeParams', '$location',
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