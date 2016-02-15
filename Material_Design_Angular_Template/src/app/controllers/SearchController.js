(function(){

  angular
    .module('app')
    .controller('SearchController', [
      '$timeout', '$q', 'sensorListService',
      SearchController
    ]);

  function SearchController($timeout, $q, sensorListService) {
    var vm = this;

    vm.sensors = sensorListService.loadAll();
    vm.selectedSensor = null;
    vm.searchText = null;
    vm.querySearch = querySearch;
    vm.disableCaching = true;

    function querySearch (query) {
      vm.sensors = sensorListService.loadAll();
      var results = query ? vm.sensors.filter( createFilterFor(query) ) : [],
        deferred;
      deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    }

    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(sensor) {
        return (sensor.value.indexOf(lowercaseQuery) === 0);
      };
    }

    function updateSensorStatus(isHealthy){
      console.log(isHealthy);
    }
  }
})();
