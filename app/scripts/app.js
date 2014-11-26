'use strict';

/**
 * @ngdoc overview
 * @name tulupaApp
 * @description
 * # tulupaApp
 *
 * Main module of the application.
 */
angular
  .module('tulupaApp', [
    'appConfig',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'userControllers',
    'userDirectives',
    'helperDirectives',
    'sessionServices'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/privacy', {
        templateUrl: 'views/privacy.html',
        controller: 'AboutCtrl'
      })
      .when('/user/password/reset/:reset_password_token', {
        templateUrl: 'views/main.html',
        controller: 'UserController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
