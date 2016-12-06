angular.module('theme.core.dashboard', ['theme.core.services'])
    .controller('DashboardController', ['$scope', '$sce', '$theme', '$timeout', '$window', 'pinesNotifications', 'BatteryService', 'WheelService', 'TelemetryService', 'HalbachService',
        'SensorService', '$riffle', '$rootScope', 'RiffleService',
        function($scope, $sce, $theme, $timeout, $window, pinesNotifications, BatteryService, WheelService,
            TelemetryService, HalbachService, SensorService, $riffle, $rootScope, RiffleService) {
            'use strict';
            
            $scope.posts = [];
            $scope.states = ["Initializing", "Accelerating", "Coasting", "Braking", "Standby"];
            $scope.s_index = 4;

            $scope.format = 'M/d/yy h:mm:ss a';

            $scope.pod = {
                velocity: 0,
                stateColor: 'btn btn-inverse-alt',
                state: 'Standby',
                start: 0,
                launch: 0,
                dt: 0,
                db: 4280
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
            $scope.progress = {accel: 0, coast: 0, braking: 0};

            $scope.data = {
            "lw1_rpm" : 0,
            "lw1_tmp" : 0,
            "rw1_rpm" : 0,
            "rw1_tmp" : 0,

            "lw2_rpm" : 0,
            "lw2_tmp" : 0,
            "rw2_rpm" : 0,
            "rw2_tmp" : 0,

            "node1_prog" : 0,
            "node2_prog" : 0,
            "node3_prog" : 0,
            "node4_prog" : 0
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

                $scope.bcm.progress = data.bcm_prog;
                
                $scope.vsm.progress = data.vsm_prog;
                
                $scope.vnm.progress = data.vnm_prog;

                $scope.progress.accel = data.accel_prog;
                // if($scope.progress.accel > 0 && $scope.progress.accel < 33) $scope.pod.state = 'Accelerating';

                $scope.progress.coast = data.coast_prog;
                // if($scope.progress.coast > 0 && $scope.progress.coast < 17) $scope.pod.state = 'Coasting';

                $scope.progress.braking = data.slow_prog;
                // if($scope.progress.braking > 0 && $scope.progress.braking < 50) $scope.pod.state = 'Braking';

                $scope.s_index = data.state;
                $scope.pod.velocity = data.velocity;
                $scope.pod.start = data.start;
                $scope.pod.launch = data.launch;
                $scope.pod.dt = data.dt;
                $scope.pod.db = data.db;

                $scope.data = data;

            });
            
            $scope.initialize = function() {
                $riffle.publish("cmd", "init");    
            }
            
            $scope.launch_pod = function() {
                $riffle.publish("cmd", "run");    
            }
            
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
])

.directive('myCurrentTime', ['$interval', 'dateFilter', function($interval, dateFilter) {

  function link(scope, element, attrs) {
    var format,
        timeoutId;

    function updateTime() {
      element.text(dateFilter(new Date(), format));
    }

    scope.$watch(attrs.myCurrentTime, function(value) {
      format = value;
      updateTime();
    });

    element.on('$destroy', function() {
      $interval.cancel(timeoutId);
    });

    // start the UI update process; save the timeoutId for canceling
    timeoutId = $interval(function() {
      updateTime(); // update DOM
    }, 1000);
  }

  return {
    link: link
  };
}]);