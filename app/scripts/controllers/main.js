'use strict';

/**
 * @ngdoc function
 * @name tulupaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tulupaApp
 */
angular.module('tulupaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
