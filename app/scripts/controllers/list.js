'use strict';

/**
 * @ngdoc function
 * @name webAssignApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webAssignApp
 */
angular.module('webAssignApp')
  .controller('ListCtrl', function ($scope, Facebook) {
  	
  	console.log('ListCtrl');
  	
  	$scope.ciao = 'ciao';


  	$scope.getAlbums = function(Facebook) {
  		Facebook.api('/me/albums', function(response) {
  			console.log('getAlbums');
  			console.log(JSON.stringify(response));

            // $scope.$apply(function() {
               
            //   $scope.user = response;
             
            // });
        });
  	};
    
  });
