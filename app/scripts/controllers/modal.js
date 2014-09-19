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

    $scope.picSource = '';
    $scope.comments = [];

    $scope.open = function (photo) { // return a modal instance
      console.log('open pressed');
      var modalInstance = $modal.open({
          templateUrl: 'views/modal.html',
          controller: 'ModalCtrl',
          scope: $scope,
          size: 'lg',
          resolve: {
            items: function () {
                return $scope.items;
              },
            photo: function(){
                return photo;
            }
          }
      });

      modalInstance.result.then(function (selectedItem) { //a promise that is resolved when a modal is closed and rejected when a modal is dismissed
        $scope.selected = selectedItem;
      }, function () {
        // $log.info('Modal dismissed at: ' + new Date());
      });
    };


  })
  .controller('CollapseCtrl', function ($scope) {
    $scope.isCollapsed = true;
  })
  

;
