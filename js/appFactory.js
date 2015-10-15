angular.module('factoryApp')

.factory('AppFactory', function($http, $q) {
  var AppFactory = {
    getTodos: function() {
      var deferred = $q.defer();

      $http
        .get('//jsonplaceholder.typicode.com/todos')
        .success(function(response) {
          deferred.resolve(response);
        })
        .error(function(error) {
          deferred.reject(error);
        })
        return deferred.promise;
    }
  }

  return AppFactory;
});