angular
    .module('theme.core.services')
    .service('RiffleService', ['$timeout', '$riffle', '$rootScope', 'SensorService', function($timeout, 
      $riffle, $rootScope, SensorService) {
        'use strict';

        var self = this;

        //listen live for status updates
        $rootScope.$on('$riffle.open', function() {
            $riffle.subscribe("temp", SensorService.getMessageList);
        });

    }]);
