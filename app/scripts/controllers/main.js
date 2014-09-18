'use strict';

/**
 * @ngdoc function
 * @name webAssignApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webAssignApp
 */
angular.module('webAssignApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
