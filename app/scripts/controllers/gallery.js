'use strict';

/**
 * @ngdoc function
 * @name webAssignApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webAssignApp
 */
angular.module('webAssignApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
