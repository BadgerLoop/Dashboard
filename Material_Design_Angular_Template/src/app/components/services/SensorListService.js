(function(){
  'use strict';

  angular.module('app')
    .service('sensorListService', [
      sensorListService
    ]);

  function sensorListService(){
    var allSensors = [
      {name: 'Sensor1', code: 'AF'},
      {name: 'Sensor2', code: 'AX'},
      {name: 'Sensor3', code: 'AL'}
    ];

    return {
      loadAll : function() {
        return allSensors.map(function(sensor) {
          return {
            value: sensor.name.toLowerCase(),
            display: sensor.name,
            code: sensor.code
          };
        });
      }
    };
  }

})();
