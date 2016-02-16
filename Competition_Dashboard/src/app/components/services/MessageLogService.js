(function(){
  'use strict';

  angular.module('app')
        .service('messageLogService', [
        '$q',
        messageLogService
  ]);

  function messageLogService($q){
    var messages =  [
        {
          facility: "Pressure",
          code: "C-RD34",
          cost: 540000,
          conditionRating: 1,
          extent: 100,
          planYear: "HEALTHY"
        }, {
          facility: "Thermistor",
          code: "CRDm-4",
          cost: 23000,
          conditionRating: 3,
          extent: 88,
          planYear: "HEALTHY"
        }, {
          facility: "Proximity",
          code: "GR-5",
          cost: 1200000,
          conditionRating: 1,
          extent: 90,
          planYear: "HEALTHY"
        }, {
          facility: "Gyro",
          code: "LY-7",
          cost: 123000,
          conditionRating: 2,
          extent: 98,
          planYear: "HEALTHY"
        }, {
          facility: "Battery",
          code: "Dm-4",
          cost: 149000,
          conditionRating: 3,
          extent: 77,
          planYear: "HEALTHY"
        }, {
          facility: "Thermistor 2",
          code: "AW-3",
          cost: 14000,
          conditionRating: 3,
          extent: 79,
          planYear: "HEALTHY"
        }, {
          facility: "Proximity 2",
          code: "Dm-4",
          cost: 1100000,
          conditionRating: 1,
          extent: 79,
          planYear: "HEALTHY"
        }, {
          facility: "Retroreflective",
          code: "DD3",
          cost: 1940000,
          conditionRating: 3,
          extent: 80,
          planYear: "HEALTHY"
        }, {
          facility: "Pressure 2",
          code: "ER1",
          cost: 910000,
          conditionRating: 2,
          extent: 82,
          planYear: "HEALTHY"
        }
      ];

    return {
      loadAllItems : function() {
        return $q.when(messages);
      }
    };
  }

})();
