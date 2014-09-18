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
  .config(function ($routeProvider, $locationProvider) {
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
  .controller('authenticationCtrl', [
    '$scope',
    '$timeout',
    'Facebook',
    function($scope, $timeout, Facebook) {

        // Define user empty data :/
        $scope.user = {};
          
        // Defining user logged status
        $scope.logged = false;

        var userIsConnected = false;

         // And some fancy flags to display messages upon user status change
      $scope.byebye = false;
      $scope.salutation = false;

        /**
           * Watch for Facebook to be ready.
           * There's also the event that could be used
           */
        $scope.$watch(
            function() {
              return Facebook.isReady();
            },
            function(newVal) {
              if (newVal) {
                $scope.facebookReady = true;
              }
            }
        );

        Facebook.getLoginStatus(function(response) {
            if (response.status === 'connected') {
              userIsConnected = true;
            } 
        });

         /**
           * IntentLogin
           */
        $scope.IntentLogin = function() {
            console.log('IntentLogin called');
            // if(userIsConnected === true) {
              console.log('userIsConnected');
              $scope.login();
            // } else {
            //   $scope.message = 'You are already connected as ' + $scope.user.name;
            // }
        };

        $scope.login = function() {
          // From now on you can use the Facebook service just as Facebook api says
          Facebook.login(function(response) {
            if (response.status === 'connected') {
                $scope.logged = true;
                $scope.me();
              }
          });
        };

        $scope.getLoginStatus = function() {
          Facebook.getLoginStatus(function(response) {
            if(response.status === 'connected') {
              $scope.logged = true;
            } else {
              $scope.logged = false;
            }
          });
        };

        $scope.me = function() {
          Facebook.api('/me', function(response) {
            /**
            * Using $scope.$apply since this happens outside angular framework.
            */
            $scope.$apply(function() {
               console.log(JSON.stringify(response));
              $scope.user = response;
            });
          });
        };

         /**
           * Logout
           */
        $scope.logout = function() {
            Facebook.logout(function(response) {
              console.log(JSON.stringify(response));
              $scope.$apply(function() {
                $scope.user   = {};
                $scope.logged = false;  
              });
            });
        };

         /**
       * Taking approach of Events :D
       */
      $scope.$on('Facebook:statusChange', function(ev, data) {
        console.log('Status: ', data);
        if (data.status === 'connected') {
          $scope.$apply(function() {
            $scope.salutation = true;
            $scope.byebye     = false;    
          });
        } else {
          $scope.$apply(function() {
            $scope.salutation = false;
            $scope.byebye     = true;
            
            // Dismiss byebye message after two seconds
            $timeout(function() {
              $scope.byebye = false;
            }, 2000);
          });
        }
        
        
      });

  }])



  /**
   * Just for debugging purposes.
   * Shows objects in a pretty way
   */
  .directive('debug', function() {
    return {
      restrict: 'E',
      scope: {
        expression: '=val'
      },
      template: '<pre>{{debug(expression)}}</pre>',
      link: function(scope) {
        // pretty-prints
        scope.debug = function(exp) {
          return angular.toJson(exp, true);
        };
      }
    };
  })
  
  ;
