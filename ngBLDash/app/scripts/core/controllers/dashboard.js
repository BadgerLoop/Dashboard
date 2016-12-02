angular.module('theme.core.dashboard', ['theme.core.services'])
    .controller('DashboardController', ['$scope', '$sce', '$theme', '$timeout', '$window', 'pinesNotifications', 'BatteryService', 'WheelService', 'TelemetryService', 'HalbachService',
        'SensorService', '$riffle', '$rootScope', 'RiffleService',
        function($scope, $sce, $theme, $timeout, $window, pinesNotifications, BatteryService, WheelService,
            TelemetryService, HalbachService, SensorService, $riffle, $rootScope, RiffleService) {
            'use strict';

            $scope.pod = {
                velocity: 0,
                stateColor: 'btn btn-inverse-alt',
                state: 'Standby',
            };

            $scope.hud = {
                show_load: true,
                done_loading: 'hide_hud',
            };

            $scope.messages = {
                modules_ready: '[ Control Module Initialization: 100% ]',
                nodes_ready: '[Backend Configuration: All nodes online ]'
                nodes_set: '[ Node 1: Set to active ]'
                safety_check: '[ Internal Safety Check: Complete ]',
                ready_status: 'messages'
            };

            $scope.mcm = {name: 'Magnetic Control Module', progress: 0, status: 'btn btn-inverse-alt'};
            $scope.bcm = {name: 'Battery Control Module', progress: 0, status: 'btn btn-inverse-alt'};
            $scope.vsm = {name: 'Vehicle Safety Module', progress: 0, status: 'btn btn-inverse-alt'};
            $scope.vnm = {name: 'Vehicle Navigation Module', progress: 0, status: 'btn btn-inverse-alt'};

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


            $scope.initialize = function() {
                $scope.modules_ready = '[ Module: ' + $scope.mcm + ' is initialized ]';
                $scope.nodes_ready = '[ Backend: Four nodes up and running ]';
                $scope.node_set = '[ Node 1: Set to active ]';
                $scope.safety_check = '[ Internal Safety Check: Complete ]'
                $scope.ready_status = 'messages';
            }

            function showHUD() {
                $scope.done_loading = '';
            }

            $scope.endLoading = function() {
                $scope.show_load = false;
                $timeout(showHUD, 2000);

            }

            $riffle.subscribe("exis", function(data) {
                $scope.mcm_prog = data.mcm_prog;
                if($scope.mcm_prog == 100) {
                    $scope.mcm_status = 'btn btn-success-alt';
                } 

                $scope.bcm_prog = data.bcm_prog;
                if($scope.bcm_prog == 100) {
                    $scope.bcm_status = 'btn btn-success-alt';
                } 

                $scope.vsm_prog = data.vsm_prog;
                if($scope.vsm_prog == 100) {
                    $scope.vsm_status = 'btn btn-success-alt';
                }

                $scope.vnm_prog = data.vnm_prog;
                if($scope.vnm_prog == 100) {
                    $scope.vnm_status = 'btn btn-success-alt';
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