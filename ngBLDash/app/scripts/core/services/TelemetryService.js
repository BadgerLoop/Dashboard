angular
  .module('theme.core.services')
  .service('TelemetryService',['$timeout', function($timeout) {
    'use strict';

    var self = this;

    this.currentVelocity = 0;
    var dxta = [],
      totalPoints = 150;
    var updateInterval = 300;

    var time = 0;

    /**
     * Create random data point for velocity. voltage
     * @return {[Int]} list of last totalPoints of velocity 
     */
     var sendVeloData = function() {
        if (dxta.length > 0) {
        dxta = dxta.slice(1);
      }
      var incr = 0;
      while (dxta.length < totalPoints) {
        var y =  incr;
  

        self.currentVelocity = y;

        dxta.push(y);
        incr++;
      }
      var res = [];

      time++;
      
      for (var i = 0; i < dxta.length; ++i) {
        res.push([time+i, dxta[i]]);
      }
      
      return res;
    }

    var getRandomData = function() {
      if (dxta.length > 0) {
        dxta = dxta.slice(1);
      }

      while (dxta.length < totalPoints) {
        var prev = dxta.length > 0 ? dxta[dxta.length - 1] : 50,
            y =  Math.random() * 30 + 130;

        if (y < 0) {
            y = 0;
            // $scope.severeAlert('BATTERY LEVEL ZERO', 'This needs electrical team attention immediately.');
        } else if (y > 160) {
            y = 160;
        }

        self.currentVelocity = Math.round(y);

        dxta.push(y);
      }
      var res = [];

      time++;
      
      for (var i = 0; i < dxta.length; ++i) {
        res.push([time+i, dxta[i]]);
      }
      
      return res;

    }

    /**
     * Graph info. for Accel
     */
    this.plotVelAccelData = [{ data: getRandomData(), label: "Velocity" }];
    this.plotVelAccelOptions = {
      series: {
        lines: {
          show: true,
          lineWidth: 1.5,
          fill: 0.15,
          fillColor: {
            colors: [{
              opacity: 0.01
            }, {
              opacity: 0.3
            }]
          }
        },
        shadowSize: 0 // Drawing is faster without shadows
      },
      grid: {
        labelMargin: 10,
        hoverable: true,
        clickable: true,
        borderWidth: 1,
        borderColor: '#f5f5f5'
      },
      yaxis: {
        min: 0,
        max: 250,
        tickColor: '#f5f5f5',
        font: {
          color: '#bdbdbd'
        }
      },
      xaxis: {
        show: false
      },
      colors: ['#E73137'],
      tooltip: true,
      tooltipOpts: {
        content: 'Pod Velocity: %ymph'
      }

    };

    /**
     * Starts the constant update of fake data for velocity data
     */
    var promise;
    this.updateRealtimeData = function() {
      self.plotVelAccelData = [getRandomData()];
      $timeout.cancel(promise);
      promise = $timeout(self.updateRealtimeData, updateInterval);
    };

    /**
     * @return {Int} current vel./200 -> into percentage
     */
    this.getVelPercentage = function() {
      var perc = self.currentVelocity/200;
      return Math.round(perc*100);
    }

  }]);