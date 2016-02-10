(function(){
  'use strict';

  angular.module('app')
    .service('sensorListService', [
      sensorListService
    ]);

  function sensorListService(){
    var allSensors = [
      {name: 'Sensor1', owner: 'AF', status: 'Healthy'},
      {name: 'Sensor2', owner: 'AX', status: 'Healthy'},
      {name: 'Sensor3', owner: 'AL', status: 'Healthy'}
    ];

    return {
      loadAll : function() {
        return allSensors.map(function(sensor) {
          return {
            value: sensor.name.toLowerCase(),
            display: sensor.name,
            owner: sensor.owner,
            status: sensor.status
          };
        });
      }
    };
  }

})();
