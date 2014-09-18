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
        controller: 'authenticationCtrl'
      })
      .otherwise({
        templateUrl: 'views/login.html',
        controller: 'authenticationCtrl'
      });
  })

// https://github.com/Ciul/angular-facebook
  .config(function(FacebookProvider) {
     // Set your appId through the setAppId method or
     // use the shortcut in the initialize method directly.
     FacebookProvider.init('1526558950912850');
  })

// da spostare dopo?
// https://github.com/Ciul/angular-facebook
  .controller('authenticationCtrl', function($scope, Facebook) {

    $scope.login = function() {
      // From now on you can use the Facebook service just as Facebook api says
      Facebook.login(function(response) {
        // Do something with response.
      });
    };

    $scope.getLoginStatus = function() {
      Facebook.getLoginStatus(function(response) {
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
  });
