angular
    .module('theme.core.services')
    .service('RiffleService', ['$timeout', '$riffle', '$rootScope', 'SensorService', function($timeout,
        $riffle, $rootScope, SensorService) {
        'use strict';

        var self = this;

        //subscribe to endpoint
        $riffle.subscribe("temp", SensorService.getMessageList);

    }]);
