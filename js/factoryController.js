angular.module('factoryApp')

.controller('FactoryController', function(AppFactory) {
  var self = this;

  AppFactory.getTodos()
    .then(function(response) {
      self.todos = response;
      console.log(response)
      
    });
});