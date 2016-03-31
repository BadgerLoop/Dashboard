angular.module('theme.core.dashboard', ['theme.core.services'])
    .controller('DashboardController', ['$scope', '$sce', '$theme', '$timeout', '$window', 'pinesNotifications', 'BatteryService', 'WheelService', 'TelemetryService',
        'SensorService', '$riffle', '$rootScope', 'RiffleService',
        function($scope, $sce, $theme, $timeout, $window, pinesNotifications, BatteryService, WheelService,
            TelemetryService, SensorService, $riffle, $rootScope, RiffleService) {
            'use strict';

            //
            //
            // ALERTS
            //
            //
            $scope.severeAlert = function(message, text) {
                pinesNotifications.notify({
                    title: message,
                    text: text,
                    type: 'error',
                    hide: false
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
