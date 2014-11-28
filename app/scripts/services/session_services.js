'use strict';

var sessionServices = angular.module('sessionServices', []);

sessionServices.factory('Session', ['$location', '$http', '$q' ,'$rootScope', 'API_SERVER', function ($location, $http, $q, $rootScope, API_SERVER) {
  // Redirect to the given url (defaults to '/')
  function redirect(url) {
    url = url || '/';
    $location.path(url);
  }

  var service = {
    currentUser: null,

    resetPassword: function(reset_password_token, password, password_confirmation) {
      return $http.put('http://' + API_SERVER + '/password', {user: {reset_password_token: reset_password_token, password: password, password_confirmation: password_confirmation}})
      .then(function (response) { // Success
        $rootScope.$emit('password-set-success');
      },
      function (response) { // Error
        $rootScope.$emit('password-set-error', response.data);
      });
    }
  };
  
  return service;
}]);
