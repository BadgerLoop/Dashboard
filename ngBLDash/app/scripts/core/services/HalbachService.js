angular
  .module('theme.core.services')
  .service('HalbachService',['$timeout', function($timeout) {
    'use strict';

    var self = this;

    this.hw1 = {'RPM': 0, 'temp': 10, 'gap': 2.0};
    this.hw2 = {'RPM': 0, 'temp': 10, 'gap': 2.0};
    this.hw3 = {'RPM': 0, 'temp': 10, 'gap': 2.0};
    this.hw4 = {'RPM': 0, 'temp': 10, 'gap': 2.0};
    this.hw5 = {'RPM': 0, 'temp': 10, 'gap': 2.0};
    this.hw6 = {'RPM': 0, 'temp': 10, 'gap': 2.0};
    this.hw7 = {'RPM': 0, 'temp': 10, 'gap': 2.0};
    this.hw8 = {'RPM': 0, 'temp': 10, 'gap': 2.0};
    this.hw9 = {'RPM': 0, 'temp': 10, 'gap': 2.0};
    this.hw10 = {'RPM': 0, 'temp': 10, 'gap': 2.0};


    var dxta = [],
      totalPoints = 20;
    var updateInterval = 500;

    /**
     * Create random data point for batt. voltage
     * @return {[Int]} list of last totalPoints of voltage 
     */
    var getRandomTemp = function() {
      //TODO
    }
    var getRandomGap = function() {
      //TODO
    }
    var getRandomRPM = function() {
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


        self.hw1.RPM = Math.round(y);
        self.hw2.RPM = Math.round(y) + 84;
        self.hw3.RPM = Math.round(y);
        self.hw4.RPM = Math.round(y) + 84;
        self.hw5.RPM = Math.round(y);
        self.hw6.RPM = Math.round(y) + 84;
        self.hw7.RPM = Math.round(y);
        self.hw8.RPM = Math.round(y) + 84;
        self.hw9.RPM = Math.round(y);
        self.hw10.RPM = Math.round(y) + 84;
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
    
    /**
     * Starts the constant update of fake data for batt. voltage
     */
    var promise;
    this.updateRealtimeData = function() {
      self.realtimeData = [getRandomRPM()];
      $timeout.cancel(promise);
      promise = $timeout(self.updateRealtimeData, updateInterval);
    };

    /**
     * @return {Int} current batt. voltage/15 -> into percentage
     */
    // this.getHalbachPercentage = function() {
    //   var perc = self.currentRPM/15;
    //   return Math.round(perc*100);
    // }

  }]);