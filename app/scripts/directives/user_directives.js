'use strict';

var userDirectives = angular.module('userDirectives', []);

userDirectives.directive('tlpResetPassword', ['$rootScope', '$location', function ($rootScope, $location) {
  return {
    restrict: 'A',
    link: function($scope, element, attrs) {
      $rootScope.$on('password-set-success', function (event) {
        $scope.showErrors = false;
        element.modal('hide');
        $location.path('/');
      });

      $rootScope.$on('password-set-error', function (event, data) {
        $scope.showErrors = true;
        $scope.errors = data.error;
        element.modal('show');
      });

      $rootScope.$on('reset-password', function (event, reset_password_token) {
        $scope.showErrors = false;
        $scope.reset_form.$setPristine();
        $scope.reset_password_token = reset_password_token;
        element.modal('show');
      });
    }
  };
}]);
