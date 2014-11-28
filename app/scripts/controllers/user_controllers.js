'use strict';

var userControllers = angular.module('userControllers', []);

userControllers.controller('UserController', ['$scope', '$routeParams', 'Session',function ($scope, $routeParams, Session) {

  $scope.showErrors = false;

  $scope.reset_passoword_token = '';
  $scope.password = '';
  $scope.password_confirmation = '';

  if(angular.isDefined($routeParams.reset_password_token)) {
    $scope.reset_password_token = $routeParams.reset_password_token;
    $scope.$emit('reset-password', $routeParams.reset_password_token);
  }

  $scope.resetPassword = function() {
    Session.resetPassword(this.reset_password_token, this.password, this.password_confirmation);
  };

}]);

