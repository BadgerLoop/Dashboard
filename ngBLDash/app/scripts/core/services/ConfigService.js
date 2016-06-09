angular.module('theme.core.services')
.service('Config', function($http) {
  return function() {
    return $http.get('../../config.json');
  };
})