  angular.module('theme.core.progress_bars_controller', ['theme.core.services'])
  .controller('ProgressbarController', ['$scope','$interval', function($scope, $interval) {
    'use strict';
    $scope.rootPanels = [{
      active: false
    }, {
      active: true
    }];

    $scope.max = 200;
    $scope.dynamic = 1;
    $scope.random = function() {
      var value = $scope.dynamic
      //Math.floor((Math.random() * 100) + 1);
      var type;

      if (value < 25) {
        type = 'success';
      } else if (value < 50) {
        type = 'info';
      } else if (value < 75) {
        type = 'warning';
      } else {
        type = 'danger';
      }

      $scope.showWarning = (type === 'danger' || type === 'warning');

      // $scope.dynamic = value;
      $scope.type = type;
    };
    $scope.random();

    $scope.randomStacked = function() {
      $scope.stacked = [];
      var types = ['success', 'info', 'warning', 'danger'];

      for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
        var index = Math.floor((Math.random() * 4));
        $scope.stacked.push({
          value: Math.floor((Math.random() * 30) + 1),
          type: types[index]
        });
      }
    };

    $scope.randomStacked();
    $interval(function() {
        $scope.dynamic = $scope.dynamic + 1;
        $scope.random();
        // console.log($scope.dynamic);
        //TODO:  ADD labels and logic for determining progress
    }, 3000);

  }]);