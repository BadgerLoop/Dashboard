angular
  .module('theme.core.services')
  .service('SensorService',['$timeout', function($timeout) {
    'use strict';

    var self = this;

    this.selectedSensors = [];

    var currentMessageList = [];
    var updateInterval = 5000;

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
      var tempMessage = jQuery.extend({}, fakeMessages[Math.floor(Math.random() * fakeMessages.length)]);
      tempMessage.timeStamp = new Date();
      currentMessageList.unshift(tempMessage);
      return currentMessageList;
    }

    this.messageList = getMessageList();

    var promise;
    this.updateRealtimeData = function() {
      self.messageList = getMessageList();
      $timeout.cancel(promise);
      promise = $timeout(self.updateRealtimeData, updateInterval);
    };

    this.timeSince = function(date){

      var seconds = Math.floor((new Date() - date) / 1000);

      var interval = Math.floor(seconds / 31536000);

      if (interval > 1) {
          return interval + " years";
      }
      interval = Math.floor(seconds / 2592000);
      if (interval > 1) {
          return interval + " months";
      }
      interval = Math.floor(seconds / 86400);
      if (interval > 1) {
          return interval + " days";
      }
      interval = Math.floor(seconds / 3600);
      if (interval > 1) {
          return interval + " hours";
      }
      interval = Math.floor(seconds / 60);
      if (interval > 1) {
          return interval + " minutes";
      }
      return Math.floor(seconds) + " seconds";
    };

  }]);