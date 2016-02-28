angular
  .module('theme.core.services')
  .service('BatteryService',['$timeout', function($timeout) {
    'use strict';

    this.currentBatVoltage = 0;
    var self = this;
    var dxta = [],
      totalPoints = 20;
    var updateInterval = 1000;

    var getRandomData = function() {
      if (dxta.length > 0) {
        dxta = dxta.slice(1);
      }

      while (dxta.length < totalPoints) {
        var prev = dxta.length > 0 ? dxta[dxta.length - 1] : 25,
            y =  Math.random() * 12;

        if (y < 0) {
            y = 0;
            // $scope.severeAlert('BATTERY LEVEL ZERO', 'This needs electrical team attention immediately.');
        } else if (y > 12) {
            y = 12;
        }

        self.currentBatVoltage = Math.round(y);

        dxta.push(y);
      }
      var res = [];
      for (var i = 0; i < dxta.length; ++i) {
        res.push([i, dxta[i]]);
      }
      
      return res;

    }

    this.realtimeData = [getRandomData()];
    this.realtimeOptions = {
        series: {
            bars: {
                show: true,
                lineWidth: 0,
                barWidth: 0.75,
                fill: 0.4
            },
            shadowSize: 0
        },
        grid: {
            labelMargin: 8,
            hoverable: true,
            clickable: true,
            borderWidth: 0,
            borderColor: '#f5f5f5'
        },
        yaxis: {
            min: 0,
            max: 15,
            ticks: [0, 7, 15],
            tickColor: '#f5f5f5', 
            font: {color: '#bdbdbd', size: 12}
        },
        xaxis: {
            show: false
        },
        colors: ['#00bcd4'],
        tooltip: true,
        tooltipOpts: {
            content: "Voltage: %yV"
        }
    };

    var promise;
    this.updateRealtimeData = function() {
      self.realtimeData = [getRandomData()];
      $timeout.cancel(promise);
      promise = $timeout(self.updateRealtimeData, updateInterval);
    };


  }]);