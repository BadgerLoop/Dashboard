angular.module('theme.core.dashboard', ['theme.core.services'])
    .controller('DashboardController', ['$scope', '$sce', '$theme', '$timeout', '$window', 'pinesNotifications', 'BatteryService', 'WheelService', 'TelemetryService', 'HalbachService',
        'SensorService', '$riffle', '$rootScope', 'RiffleService',
        function($scope, $sce, $theme, $timeout, $window, pinesNotifications, BatteryService, WheelService,
            TelemetryService, HalbachService, SensorService, $riffle, $rootScope, RiffleService) {
            'use strict';

            $scope.velocity = 0;
            $scope.data = {
            "lw1_rpm" : 0,
            "lw1_tmp" : 0,
            "rw1_rpm" : 0,
            "rw1_tmp" : 0,

            "lw2_rpm" : 0,
            "lw2_tmp" : 0,
            "rw2_rpm" : 0,
            "rw2_tmp" : 0,
            "velocity" : 0 
            }
 

            $scope.mcm_prog = 0;
            $scope.bcm_prog = 0;
            $scope.vsm_prog = 0;
            $scope.vnm_prog = 0;

            $scope.mcm_status = "Initialized";
            $scope.bcm_status = "";
            $scope.vsm_status = "";
            $scope.vnm_status = "";

            $riffle.subscribe("exis", function(data) {
                $scope.mcm_prog = data.mcm_prog;
                if($scope.mcm_prog == 100) {
                    $scope.mcm_status = "Initialized";
                } 

                $scope.bcm_prog = data.bcm_prog;
                if($scope.bcm_prog == 100) {
                    $scope.bcm_status = "Initialized";
                } 

                $scope.vsm_prog = data.vsm_prog;
                if($scope.vsm_prog == 100) {
                    $scope.vsm_status = "Initialized";
                }

                $scope.vnm_prog = data.vnm_prog;
                if($scope.vnm_prog == 100) {
                    $scope.vnm_status = "Initialized";
                }

                $scope.data = data;

            });

           
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

            //
            //      HALBACH MONITOR
            //
            //

            HalbachService.updateWheels();
            $scope.halbach = HalbachService;

            //
            //          END
            //      HALBACH MONITOR
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