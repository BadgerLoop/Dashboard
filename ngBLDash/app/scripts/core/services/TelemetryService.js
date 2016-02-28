angular
  .module('theme.core.services')
  .service('TelemetryService', function() {
    'use strict';

    var self = this;

    var velocity = [[1, 17], [2, 34], [3, 73], [4, 47], [5, 90], [6, 70], [7, 40]];
    var accel = [[1, 54], [2, 40], [3, 10], [4, 25], [5, 42], [6, 14], [7, 36]];
    this.plotVelAccelData = [{ data: velocity, label: "Velocity" }, { data: accel, label: "Acceleration" }];
    this.plotVelAccelOptions = {
        series: {
            shadowSize: 0,
            lines: { 
                show: false,
                lineWidth: 0
            },
            points: { show: true },
            splines: {
                show: true,
                fill: 0.08,
                tension: 0.3,
                lineWidth: 2
            },
        },
        grid: {
            labelMargin: 8,
            hoverable: true,
            clickable: true,
            borderWidth: 0,
            borderColor: '#fafafa'
        },
        legend: {
            backgroundColor: '#fff',
            margin: 8
        },
        yaxis: { 
            min: 0, 
            max: 200, 
            tickColor: '#fafafa', 
            font: {color: '#bdbdbd', size: 12},
        },
        xaxis: { 
            tickColor: 'transparent',
            tickDecimals: 0, 
            font: {color: '#bdbdbd', size: 12}
        },
        colors: ['#9fa8da', '#80deea'],
        tooltip: true,
        tooltipOpts: {
            content: "Time: %x : MPH: %y"
        }
    };

  });