angular.module('theme.core.VNM_controller', ['theme.core.services'])
  .controller('VNMController', ['$scope', '$filter', '$http', 'SensorService' ,'$interval', function($scope, $filter, $http, SensorService, $interval) {
    'use strict';

	console.log("Injected VNM controller");
    var dxta = []
    var totalPoints = 200;
    var time = 0;
    $scope.data = [[0,25],[0,15]];
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

        dxta.push(y);
      }
      var res = [];

      time++;
      
      for (var i = 0; i < dxta.length; ++i) {
        res.push([time+i, dxta[i]]);
      }
      //console.log(res)
      $scope.data = res
      return res;

    }
//TODO: add chart data service
  //    $interval(function() {
		// getRandomData()
  //   }, 5);

    $scope.options = {
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
        max: 200,
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
    
  }]);