'use strict';


angular.module('webAssignApp')
  
  .controller('HeaderCtrl', function ($scope, $location) {

  	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    
});
