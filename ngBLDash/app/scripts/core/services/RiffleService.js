angular
    .module('theme.core.services')
    .service('RiffleService', ['$timeout', '$riffle', '$rootScope', function($timeout, $riffle, $rootScope) {
        'use strict';

        var self = this;

        //listen live for status updates
        $rootScope.$on('$riffle.open', function() {
            $riffle.subscribe("temp", update);
        });

        function update(data){
          console.log(data);
        }

    }]);
