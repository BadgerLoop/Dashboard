angular.module('theme.core.dashboard', ['theme.core.services'])
  .controller('DashboardController', ['$scope', '$theme', '$timeout', '$window','pinesNotifications', 'BatteryService', 'TelemetryService', function($scope, $theme, $timeout, $window, pinesNotifications, BatteryService, TelemetryService) {
    'use strict';
    
    //
    //
    // ALERTS
    //
    //
    $scope.severeAlert = function(message, text){
        pinesNotifications.notify({
        title: message,
        text: text,
        type: 'error',
        hide: false
        });
    }


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

    var d1 = [
        [1, 2],
        [2, 4],
        [3, 1.25],
        [4, 3.5],
        [5, 4.5],
        [6, 2],
        [7, 2.75]
    ];
    var d2 = [
        [1, 1.5],
        [2, 3],
        [3, 0.75],
        [4, 2.75],
        [5, 3.25],
        [6, 1.5],
        [7, 2.15]
    ];
    var d3 = [
        [1, 0.35],
        [2, 1.75],
        [3, 0.15],
        [4, 0.75],
        [5, 0.15],
        [6, 0.7],
        [7, 1.5]
    ];

    var ds = new Array();

    ds.push({
        data: d1,
        label: "Revenues",
        bars: {
            show: true,
            barWidth: 0.12,
            order: 1
        }
    });
    ds.push({
        data: d2,
        label: "Earnings",
        bars: {
            show: true,
            barWidth: 0.12,
            order: 2
        }
    });
    ds.push({
        data: d3,
        label: "Referrals",
        bars: {
            show: true,
            barWidth: 0.12,
            order: 3
        }
    });

    $scope.plotEarningsData = ds;
    $scope.plotEarningsOptions = {
        series: {
            bars: {
                show: true,
                fill: 0.5,
                lineWidth: 2
            }
        },
        grid: {
            labelMargin: 8,
            hoverable: true,
            clickable: true,
            tickColor: "#fafafa",
            borderWidth: 0
        },
        colors: ["#cfd8dc", "#78909c", "#ff5722"],
        xaxis: {
            autoscaleMargin: 0.08,
            tickColor: "transparent",
            ticks: [[1, "1"], [2, "2"], [3, "3"], [4, "4"],[5, "5"],[6, "6"],[7, "7"]],
            tickDecimals: 0,
            font: {
                color: '#bdbdbd',
                size: 12
            }
        },
        yaxis: {
            ticks: [0, 1, 2, 3, 4, 5],
            font: {
                color: '#bdbdbd',
                size: 12
            },
            tickFormatter: function (val, axis) {
                return "$" + val + "K";
            }
        },
        legend : {
            backgroundColor: '#fff',
            margin: 8
        },
        tooltip: true,
        tooltipOpts: {
            content: "x: %x, y: %y"
        }
    };

    $scope.plotDonutData = [
        { label: "Returning",  data: 68, color: '#7e57c2'},
        { label: "New",  data: 32, color: '#26c6da'}
    ];

    $scope.plotDonutOptions = {
        series: {
            pie: {
                innerRadius: 0.55,
                show: true,
                offset : {
                    left: 0
                }
            }
        },
        legend: {
            show: true,
            margin: 8
        },
        grid: {
            hoverable: true,
            labelMargin: 8
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s"
        }
    };

    $scope.epPctg = 1;
    $scope.epProgress = {
        barColor: "#cddc39",
        trackColor: 'rgba(255, 255, 255, 0.32)',
        scaleColor: false,
        scaleLength: 8,
        lineCap: 'square',
        lineWidth: 2,
        size: 96,
        onStep: function(from, to, percent) {
                // console.log(from, to, percent, $scope.epPctg);
            $timeout( function () {
                $scope.epPctg = Math.round(percent);
            })
        }
    };

    //World Map

    var randomNumbers = function (min, max, length) {
        var arr = [];
        var distance = max - min;
        for (var i = 0; i < length; i++) {
            arr.push(min+Math.round(Math.random() * distance))
        }

        return arr;
    }

    $scope.worldMapSpecs = {
        map: 'world_mill_en',
        backgroundColor: '#fff',
        zoomOnScroll: false,
        regionStyle: {
            initial: {
              fill: '#ddd',
              "fill-opacity": 1,
              stroke: 'none',
              "stroke-width": 0,
              "stroke-opacity": 1
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: 'pointer'
            },
            selected: {
              fill: 'yellow'
            },
        },
        markerStyle: {
            initial: {
                fill: '#ff6e40',
                stroke: '#ff6e40',
                "fill-opacity": 1,
                "stroke-width": 0,
                "stroke-opacity": 0,
                r: 5
            },
            hover: {
                stroke: 'black',
                "stroke-width": 0,
                cursor: 'pointer'
            },
            selected: {
                fill: 'blue'
            },
            selectedHover: {
            }
        },

        markers: [
            {latLng: [40.7127, -74.0059], name: 'New York'},
            {latLng: [41.9033, 12.4533], name: 'Vatican City'},
            {latLng: [48.8567, 2.3508], name: 'Paris'},
            {latLng: [-31.9522, 115.8589], name: 'Perth'},
            {latLng: [-8.7619, -63.9039], name: 'Porto Velho'},
            {latLng: [39.9500, -75.1667], name: 'Philadelphia'},
            {latLng: [41.4822, -81.6697], name: 'Cleveland'},
            {latLng: [1.3, 103.8], name: 'Singapore'},
        ],
        series: {
            markers: [{
                attribute: 'r',
                scale: [3, 17],
                values: randomNumbers(200, 1500, 24)
            }]
        },
    };

  }])

//Welcome Alert
.run(['pinesNotifications', function(pinesNotifications){
    pinesNotifications.notify({
        title: 'BadgerLoop Dashboard Setup',
        text: 'The dashboard is fully setup and running.',
        type: 'success'
      });
}]);