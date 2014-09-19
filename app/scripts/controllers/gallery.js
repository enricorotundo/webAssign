'use strict';

/**
 * @ngdoc function
 * @name webAssignApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the webAssignApp
 */
angular.module('webAssignApp')
  .controller('GalleryCtrl', function ($scope, $routeParams, Facebook) {
    
    $scope.albumId=$routeParams.albumId; 
    console.log($scope.albumId);

    $scope.getAlbum = function(query) {
          Facebook.api($scope.albumId.concat('/photos'), function(response) {
          	console.log(JSON.stringify(response));
            $scope.$apply(function() {
               
              $scope.data = response;
             
            });
          });
        };


        $scope.data = $scope.getAlbum();



  });
