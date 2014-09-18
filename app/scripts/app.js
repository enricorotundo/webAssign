'use strict';

/**
 * @ngdoc overview
 * @name webAssignApp
 * @description
 * # webAssignApp
 *
 * Main module of the application.
 */
angular
  .module('webAssignApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'facebook'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      });
  })
  // https://github.com/Ciul/angular-facebook
  .config(['FacebookProvider', function(FacebookProvider) {
        
        FacebookProvider.init('1526558950912850');
      }
  ])
  // https://github.com/Ciul/angular-facebook
  .controller('facebookCtrl', ['$scope','$timeout','Facebook', function($scope, Facebook) {
    
      $scope.login = function() {
        // From now on you can use the Facebook service just as Facebook api says
        Facebook.login(function(response) {
          // Do something with response.
        });
      };

      $scope.getLoginStatus = function() {
        Facebook.getLoginStatus(function(response) {

          console.log(response);

          if(response.status === 'connected') {
            $scope.loggedIn = true;
          } else {
            $scope.loggedIn = false;
          }
        });
      };

      $scope.me = function() {
        Facebook.api('/me', function(response) {
          $scope.user = response;
        });
      };

    }])
  ;