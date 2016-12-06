angular
  .module('theme.core.services')
  .service('WheelService',['$timeout', function($timeout) {
    'use strict';

    var self = this;

    this.currentRPMleft = 0;
    this.currentRPMright = 0;

    var dxta = [],
      totalPoints = 20;
    var updateInterval = 500;

    /**
     * Create random data point for batt. voltage
     * @return {[Int]} list of last totalPoints of voltage 
     */
    var getRandomData = function() {
      if (dxta.length > 0) {
        dxta = dxta.slice(1);
      }

      while (dxta.length < totalPoints) {
        var prev = dxta.length > 0 ? dxta[dxta.length - 1] : 25,
            y =  Math.random() * 100 + 5200;

        if (y < 0) {
            y = 0;
            // $scope.severeAlert('BATTERY LEVEL ZERO', 'This needs electrical team attention immediately.');
        } else if (y > 7000) {
            y = 7000;
        }

        self.currentRPMleft = Math.round(y);
        self.currentRPMright = Math.round(y) + 84;

        dxta.push(y);
      }
      var res = [];
      for (var i = 0; i < dxta.length; ++i) {
        res.push([i, dxta[i]]);
      }
      
      return res;

    }

    /**
     * Graph info. for Batt.
     */
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
            ticks: [0, 8, 15],
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

    /**
     * Starts the constant update of fake data for batt. voltage
     */
    var promise;
    this.updateRealtimeData = function() {
      self.realtimeData = [getRandomData()];
      $timeout.cancel(promise);
      promise = $timeout(self.updateRealtimeData, updateInterval);
    };

    /**
     * @return {Int} current batt. voltage/15 -> into percentage
     */
    this.getWheelPercentage = function() {
      var perc = self.currentRPM/15;
      return Math.round(perc*100);
    }

  }]);