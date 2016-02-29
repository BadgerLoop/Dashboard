angular
  .module('theme.core.services')
  .service('SensorService',['$timeout', function($timeout) {
    'use strict';

    var self = this;

    var currentMessageList = [];
    var updateInterval = 2000;

    var fakeMessages = [
        {
          sensor: "BPM Opt. En.",
          data: "12"
        },
        {
          sensor: "Ecm Therm.",
          data: "120 F"
        },
        {
          sensor: "Ecm Therm. 2",
          data: "98 F"
        },
        {
          sensor: "VCM Accel.",
          data: "15 m/s"
        },
        {
          sensor: "WCM Latency",
          data: "32 mb/s"
        },
        {
          sensor: "MCM Prox.",
          data: "4 mm"
        },
        {
          sensor: "VCM Gyro.",
          data: "X: 23 Y: 32 Z: 43"
        }
    ];

    var getMessageList = function() {
      currentMessageList.push(fakeMessages[Math.floor(Math.random() * fakeMessages.length)]);
      return currentMessageList;
    }

    this.messageList = getMessageList();

    var promise;
    this.updateRealtimeData = function() {
      self.messageList = getMessageList();
      $timeout.cancel(promise);
      promise = $timeout(self.updateRealtimeData, updateInterval);
    };
  }]);