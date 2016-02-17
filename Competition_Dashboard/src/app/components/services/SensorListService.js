(function(){
  'use strict';

  angular.module('app')
    .service('sensorListService', [
      sensorListService
    ]);

  function sensorListService(){
    var allSensors = [
      {SID: 0, name: 'Eddy Brake Magnet Thermistor 1', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 1, name: 'Eddy Brake Magnet Thermistor 2', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 2, name: 'Eddy Brake Magnet Thermistor 3', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 3, name: 'Eddy Brake Magnet Thermistor 4', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 4, name: 'Eddy Brake Magnet Thermistor 5', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 5, name: 'Eddy Brake Magnet Thermistor 6', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 6, name: 'Eddy Brake Magnet Thermistor 7', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 7, name: 'Eddy Brake Magnet Thermistor 8', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 8, name: 'Eddy Brake Magnet Thermistor 9', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 9, name: 'Eddy Brake Magnet Thermistor 10', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 10, name: 'Eddy Brake Magnet Thermistor 11', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 11, name: 'Eddy Brake Magnet Thermistor 12', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 12, name: 'Disk Brake Shoe Thermocouple 1', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 13, name: 'Disk Brake Shoe Thermocouple 2', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 14, name: 'Disk Brake Shoe Thermocouple 3', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 15, name: 'Disk Brake Shoe Thermocouple 4', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 16, name: 'Retroreflective Axle Shaft Encoder 1', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 17, name: 'Retroreflective Axle Shaft Encoder 2', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 18, name: 'Wheel Bogie Limit Switch 1', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 19, name: 'Wheel Bogie Limit Switch 2', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 20, name: 'Wheel Bogie Limit Switch 3', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 21, name: 'Wheel Bogie Limit Switch 4', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 22, name: 'Drum Brake Limit Switch 1', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 23, name: 'Drum Brake Limit Switch 2', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 24, name: 'Drum Brake Limit Switch 3', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 25, name: 'Drum Brake Limit Switch 4', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 26, name: 'Drum Brake Limit Switch 5', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 27, name: 'Drum Brake Limit Switch 6', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 28, name: 'Drum Brake Limit Switch 7', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 29, name: 'Drum Brake Limit Switch 8', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 30, name: 'Eddy Brake Magnet Voltage Sensor 1', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 31, name: 'Eddy Brake Magnet Voltage Sensor 2', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 32, name: 'Eddy Brake Magnet Current Sensor 1', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 33, name: 'Eddy Brake Magnet Current Sensor 2', owner: 'Electrical', isHealthy: true, timeStamp: null},
      {SID: 34, name: 'Interial Measurement Unit', owner: 'Electrical', isHealthy: true, timeStamp: null}
    ];

    return {
      loadAll : function() {
        return allSensors.map(function(sensor) {
          var sensorStatus = "Healthy";
          if(!sensor.isHealthy){
            sensorStatus = "Down"
          }else{
            sensor.timeStamp = new Date().getTime();
          }
          return {
            value: sensor.name.toLowerCase(),
            SID: sensor.SID,
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
