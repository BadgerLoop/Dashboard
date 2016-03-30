angular
  .module('theme.core.ng_grid', [
    'ngGrid'
  ])
  .controller('SensorSearchController', ['$scope', '$filter', '$http', 'SensorService', function($scope, $filter, $http, SensorService) {
    'use strict';

    $scope.sensors = SensorService;

   
    $scope.filterOptions = $scope.sensors.filterOptions;
    $scope.totalServerItems = 0;
    $scope.pagingOptions = $scope.sensors.pagingOptions;
    $scope.gridOptions = $scope.sensors.gridOptions;


    

    
    $scope.setPagingData = function(data, page, pageSize) {
      var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
      $scope.myData = pagedData;
      $scope.totalServerItems = data.length;

      $scope.sensors.compareSelect(data);

      if (!$scope.$$phase) {
        console.log("if set");
        $scope.$apply();
      }

    };

    $scope.getPagedDataAsync = function(pageSize, page, searchText) {
      setTimeout(function() {
        var data;
        if (searchText) {
          var ft = searchText.toLowerCase();
          $http.get('assets/sensorlist.json').success(function(largeLoad) {
            data = largeLoad.filter(function(item) {
              return JSON.stringify(item).toLowerCase().indexOf(ft) !== -1;
            });
            $scope.setPagingData(data, page, pageSize);
          });
          
        } else {
          
          $http.get('assets/sensorlist.json').success(function(largeLoad) {
            $scope.setPagingData(largeLoad, page, pageSize);
          });
        }
      }, 100);
    };

    $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

    $scope.$watch('pagingOptions', function(newVal, oldVal) {
      if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
      
         
        $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
      }
    }, true);

    $scope.$watch('filterOptions', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
      }
    }, true);

    // $scope.selectRow = function(){
    //     angular.forEach($scope.myData, function(data, index){
    //         if(data.name == 'Enos'){
    //             $scope.gridOptions.selectItem(index, true);
    //         }
    //     });
    // };

    
  }]);