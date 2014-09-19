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
    'Facebook',
    function($scope, Facebook) {

    	$scope.ciao = 'coap';
    	$scope.getAlbums = function() {
          Facebook.api('/me/albums', function(response) {
          	console.log(JSON.stringify(response));
            /**
            * Using $scope.$apply since this happens outside angular framework.
            */
            $scope.$apply(function() {
               
              $scope.user = response;
             
            });
          });
        };

    }]);
