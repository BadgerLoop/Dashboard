angular.module('theme.core.dashboard', ['theme.core.services'])
    .controller('DashboardController', ['$scope', '$sce', '$theme', '$timeout', '$window', 'pinesNotifications', 'BatteryService', 'WheelService', 'TelemetryService', 'HalbachService',
        'SensorService', '$riffle', '$rootScope', 'RiffleService',
        function($scope, $sce, $theme, $timeout, $window, pinesNotifications, BatteryService, WheelService,
            TelemetryService, HalbachService, SensorService, $riffle, $rootScope, RiffleService) {
            'use strict';
            
            $scope.posts = [];

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
                nodes_ready: '[Backend Configuration: All nodes online ]',
                nodes_set: '[ Node 1: Set to active ]',
                safety_check: '[ Internal Safety Check: Complete ]',
                ready_status: ''
            };

            $scope.mcm = {name: 'Magnetic Control Module', progress: 0, status: 'btn btn-inverse-alt', printMsg: ''};
            $scope.bcm = {name: 'Battery Control Module', progress: 0, status: 'btn btn-inverse-alt', printMsg: ''};
            $scope.vsm = {name: 'Vehicle Safety Module', progress: 0, status: 'btn btn-inverse-alt', printMsg: ''};
            $scope.vnm = {name: 'Vehicle Navigation Module', progress: 0, status: 'btn btn-inverse-alt', printMsg: ''};

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

                $scope.mcm.progress = 100;
                $scope.mcm.printMsg = 'messages';
                $scope.posts.push({ message: '[ ' + $scope.mcm.name + ': Initialized ]', owner: $scope.mcm.printMsg});
            }

            function showHUD() {
                $scope.hud.done_loading = '';
            }

            $scope.endLoading = function() {
                $scope.hud.show_load = false;
                $timeout(showHUD, 2000);

            }

            $riffle.subscribe("exis", function(data) {

                $scope.mcm.progress = data.mcm_prog;
                if($scope.mcm.progress == 100) {
                    $scope.mcm.status = 'btn btn-success-alt';
                    $scope.posts.push('[ ' + $scope.mcm.name + ': Initialized');
                } 

                $scope.bcm.progress = data.bcm_prog;
                if($scope.bcm.progress == 100) {
                    $scope.bcm.status = 'btn btn-success-alt';
                } 

                $scope.vsm.progress = data.vsm_prog;
                if($scope.vsm.progress == 100) {
                    $scope.vsm.status = 'btn btn-success-alt';
                }

                $scope.vnm.progress = data.vnm_prog;
                if($scope.vnm.progress == 100) {
                    $scope.vnm.status = 'btn btn-success-alt';
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