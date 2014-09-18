'use strict';

/**
 * @ngdoc function
 * @name webAssignApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the webAssignApp
 */
angular.module('webAssignApp', ['facebook'])

	// https://github.com/Ciul/angular-facebook
	.config(['FacebookProvider', function(FacebookProvider) {
	    	var myAppId = '1526558950912850';
	    	FacebookProvider.init(myAppId);
	    }
 	])
 	
	// https://github.com/Ciul/angular-facebook
	.controller('LoginCtrl', ['Facebook', function($scope, Facebook) {

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

  	}]);