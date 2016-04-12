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

  //var wheelTemps = [this.hw1.temp, this.hw2.temp, this.hw3.temp, this.hw4.temp, this.hw5.temp, this.hw6.temp, this.hw7.temp, this.hw8.temp, this.hw9.temp, this.hw10.temp];
  //var wheelGap = [this.hw1.gap, this.hw2.gap, this.hw3.gap, this.hw4.gap, this.hw5.gap, this.hw6.gap, this.hw7.gap, this.hw8.gap, this.hw9.gap, this.hw10.gap];

    var dxta = [],
      totalPoints = 20;
    var updateInterval = 500;

    /**
     * Create random data point for batt. voltage
     * @return {[Int]} list of last totalPoints of voltage 
     */
    // var getRandomTemp = function() {
      
    //   for(var temps in wheelTemps){
    //     var  x =  Math.random() * 100;
    //     wheelTemps[temps] = Math.round(x); 
    //   }
    //   return wheelTemps;
    // }
    // var getRandomGap = function() {
    //     for(var gaps in wheelGap){
    //     var y =  Math.random() * 50;
    //     wheelTemps[gaps] = Math.round(y); 
    //   }
    //   return wheelGaps;
    // }

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

        dxta.push(y);
      }

      var a = Math.random() * 100;
      var b = Math.random() * 100;
      var c= Math.random() * 100;
      var d = Math.random() * 100;
      var e = Math.random() * 100;

        self.hw1.RPM = Math.round(a);
        self.hw2.RPM = Math.round(a) + 84;
        self.hw3.RPM = Math.round(a);
        self.hw4.RPM = Math.round(a) + 84;
        self.hw5.RPM = Math.round(a);
        self.hw6.RPM = Math.round(a) + 84;
        self.hw7.RPM = Math.round(a);
        self.hw8.RPM = Math.round(a) + 84;
        self.hw9.RPM = Math.round(a);
        self.hw10.RPM = Math.round(a) + 84;



        self.hw1.temp = Math.round(a);
        self.hw2.temp = Math.round(b);
        self.hw3.temp = Math.round(c);
        self.hw4.temp = Math.round(d);
        self.hw5.temp = Math.round(e);
        self.hw6.temp = Math.round(a);
        self.hw7.temp = Math.round(b);
        self.hw8.temp = Math.round(c);
        self.hw9.temp = Math.round(d);
        self.hw10.temp= Math.round(e);


        self.hw1.gap = Math.round(a);
        self.hw2.gap = Math.round(b);
        self.hw3.gap = Math.round(c);
        self.hw4.gap = Math.round(d);
        self.hw5.gap = Math.round(e);
        self.hw6.gap = Math.round(a);
        self.hw7.gap = Math.round(b);
        self.hw8.gap = Math.round(c);
        self.hw9.gap = Math.round(d);
        self.hw10.gap = Math.round(e);
           


      var res = [];
      for (var i = 0; i < dxta.length; ++i) {
        res.push([i, dxta[i]]);
      }
      
      return res;

    }

    /**
     * Graph info. for Batt.
     */
   // this.realtimeData = [getRandomData()];
    
    /**
     * Starts the constant update of fake data for batt. voltage
     */
    var promise;
    this.updateWheels = function() {
      self.realtimeData = [getRandomData()];
      $timeout.cancel(promise);
      promise = $timeout(self.updateWheels, updateInterval);
    };

    /**
     * @return {Int} current batt. voltage/15 -> into percentage
     */
    // this.getHalbachPercentage = function() {
    //   var perc = self.currentRPM/15;
    //   return Math.round(perc*100);
    // }

  }]);
