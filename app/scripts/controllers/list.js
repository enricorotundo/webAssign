'use strict';

/**
 * @ngdoc function
 * @name webAssignApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webAssignApp
 */
angular.module('webAssignApp')
  .controller('ListCtrl', [
    '$scope',
    '$rootScope',
    'Facebook',
    function($rootScope, $scope, Facebook) {

    	$scope.accessToken = $rootScope.token;

    	$scope.getAlbums = function() {
          Facebook.api('/me/albums', function(response) {
          	console.log(JSON.stringify(response));
            /**
            * Using $scope.$apply since this happens outside angular framework.
            */
            $scope.$apply(function() {
               
              $scope.data = response;
              $scope.ownerName = response.data[0].from.name;
             
            });
          });
        };


        $scope.data = $scope.getAlbums();


    }]);
