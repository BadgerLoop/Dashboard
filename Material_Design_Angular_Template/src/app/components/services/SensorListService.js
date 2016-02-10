(function(){
  'use strict';

  angular.module('app')
    .service('sensorListService', [
      sensorListService
    ]);

  function sensorListService(){
    var allSensors = [
      {name: 'Proximity', owner: 'Electrical', status: 'Healthy'},
      {name: 'Thermistor 1', owner: 'Electrical', status: 'Healthy'},
      {name: 'Thermistor 2', owner: 'Electrical', status: 'Healthy'},
      {name: 'Voltage', owner: 'Electrical', status: 'Healthy'},
      {name: 'Encoder', owner: 'Duncan LOL', status: 'Healthy'}
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
