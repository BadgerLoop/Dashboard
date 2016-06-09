angular.module('theme.core.MCM_controller', ['theme.core.services'])
  .controller('MCMController', ['$scope', '$filter', '$http', 'SensorService', function($scope, $filter, $http, SensorService) {
    'use strict';

    console.log("Injected MCM controller");
  }]);