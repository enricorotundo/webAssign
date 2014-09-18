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
    'ngTouch'
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
  });
