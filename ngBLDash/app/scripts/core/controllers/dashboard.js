

angular.module('theme.core.dashboard', ['theme.core.services'])
// .factory('haproxy', ['$resource',
//     function($resource) {
//         return $resource('http://192.168.99.100:1936/haproxy/stats;csv;norefresh', {dataType: 'jsonp'}, {
//                 getStats: { method: "GET", params: {} }
//         });
//     }])
    .controller('DashboardController', ['$scope','$http', '$interval', '$sce', '$theme', '$timeout', '$window', 'pinesNotifications', 'BatteryService', 'WheelService', 'TelemetryService',
        'SensorService', '$riffle', '$rootScope', 'RiffleService',
        function($scope, $http, $interval, $sce, $theme, $timeout, $window, pinesNotifications, BatteryService, WheelService,
            TelemetryService, SensorService, $riffle, $rootScope, RiffleService) {
            'use strict';
        $scope.numNodes
        $scope.healthyNodes
        $scope.unhealthyNodes  
            //
            //
            // ALERTS
            //
            //

       $http.get('assets/haproxydata.json').success(function(stuff) {
                console.log(stuff)
                $scope.healthyNodes = stuff.up
                $scope.unhealthyNodes = stuff.down
                $scope.numNodes = $scope.healthyNodes.length + $scope.unhealthyNodes.length
        });

       $interval(function() {
                $http.get('assets/haproxydata.json').success(function(stuff) {
                    if (stuff.up.length < $scope.healthyNodes.length){
                        $scope.severeAlert('node went down', '')
                            $scope.healthyNodes = stuff.up
                            $scope.unhealthyNodes = stuff.down
                    }
                    else if (stuff.up.length > $scope.healthyNodes.length) {
                        pinesNotifications.notify({
                            title: 'node went up',
                            text: '',
                            type: 'success'
                        });
                        $scope.healthyNodes = stuff.up
                        $scope.unhealthyNodes = stuff.down
                    }
                    // $scope.healthyNodes = stuff.up.length
                    // $scope.unhealthyNodes = stuff.down.length
                    // $scope.numNodes = $scope.healthyNodes + $scope.unhealthyNodes

                    //if (data.up)
                });
            }, 1000);
        

            $scope.severeAlert = function(message, text) {
                pinesNotifications.notify({
                    title: message,
                    text: text,
                    type: 'error'
                });
            }
            $scope.goodAlert = function(message, text) {
                pinesNotifications.notify({
                    title: message,
                    text: text,
                    type: 'success'
                });
            }

            $scope.trustAsHtml = $sce.trustAsHtml

            //
            //
            // BATTERY VOLTAGE MONITOR
            //
            //

            BatteryService.updateRealtimeData();
            $scope.batt = BatteryService;
            //
            //          END
            // BATTERY VOLTAGE MONITOR
            //


            //
            //
            //      TELEM MONITOR
            //
            //

            TelemetryService.updateRealtimeData();
            $scope.telem = TelemetryService;

            //
            //          END
            //      TELEM MONITOR
            //

            //
            //
            //      WHEEL MONITOR
            //
            //

            WheelService.updateRealtimeData();
            $scope.wheel = WheelService;

            //
            //          END
            //      WHEEL MONITOR
            //
            //
            //
            //      SENSOR MONITOR
            //
            //

            // SensorService.updateRealtimeData();
            $scope.sensor = SensorService;

            //For removing from selected sensor list
            $scope.removeSensorFromList = function(sensor) {
                $scope.sensor.removeSensorFromList(sensor);
            }

            //
            //          END
            //      SENSOR MONITOR
            //
           
        }
    ]);
