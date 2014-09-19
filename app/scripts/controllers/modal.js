'use strict';

/**
 * @ngdoc function
 * @name webAssignApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the webAssignApp
 */
angular.module('webAssignApp')
  .controller('ModalCtrl', function ($scope, $routeParams, Facebook, $modal) {

    $scope.helloworld = 'MODAL';

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function (size) {
      console.log('open pressed');
      var modalInstance = $modal.open({
          templateUrl: 'views/modal.html',
          controller: 'ModalCtrl',
          size: size,
          resolve: {
          items: function () {
              return $scope.items;
            }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        // $log.info('Modal dismissed at: ' + new Date());
      });
    };
    
    // $scope.albumId=$routeParams.albumId; 
    // console.log($scope.albumId);

    // var query = $scope.albumId.concat('/photos');

    // console.log(query);

    // $scope.getAlbum = function(query) {
    //       Facebook.api('179967212110778/photos', function(response) {
    //       	console.log(JSON.stringify(response));
    //         $scope.$apply(function() {
               
    //           $scope.data = response;
             
    //         });
    //       });
    //     };


    //     $scope.data = $scope.getAlbum();



  });
