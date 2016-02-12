(function(){
  'use strict';

  angular.module('app')
    .service('sensorListService', [
      sensorListService
    ]);

  function sensorListService(){
    var allSensors = [
      {name: 'Proximity', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {name: 'Thermistor 1', owner: 'Electrical', isHealthy: false, timeStamp: null},
      {name: 'Thermistor 2', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {name: 'Voltage', owner: 'Electrical', isHealthy: false, timeStamp: null},
      {name: 'Encoder', owner: 'Duncan LOL', isHealthy: true, timeStamp: null}
    ];

    return {
      loadAll : function() {
        return allSensors.map(function(sensor) {
          var sensorStatus = "Healthy"
          if(!sensor.isHealthy){
            sensorStatus = "Down"
          }
          return {
            value: sensor.name.toLowerCase(),
            display: sensor.name,
            owner: sensor.owner,
            status: sensorStatus,
            timeStamp: sensor.timeStamp
          };
        });
      }
    };
  }

})();
