angular
    .module('theme.core.services')
    .service('SensorService', ['$timeout', '$riffle', '$http', '$filter', function($timeout, $riffle, $scope, $filter, $http) {
        'use strict';

        var self = this;

        self.selectedSensors = [];
        self.demoData = 0;
        var time = 0;
        self.demoDataArray = [];
        var tdata = 0;
        var currentMessageList = [];
        var updateInterval = 1000;
        var map = {'BPM1': 0, 'BPM2': 1, 'MCM': 2, "VCM": 3, 'ECM': 4};
        var modulesMessageCount = [ {name: "BPM1", value: 0}, {name: "BPM2", value: 0}, {name: "MCM", value: 0}, {name: "VCM", value: 0}, {name: "ECM", value: 0 }];

        /**
         * Create random message, increment module count, timestamp, add to list
         * @return {[Messages]} List of all messages 
         */

    var dxta = [],
      totalPoints = 150;
    var updateInterval = 300;

    var time = 0;

    /**
     * Create random data point for velocity. voltage
     * @return {[Int]} list of last totalPoints of velocity 
     */
    var getRandomData = function(data) {
      if (dxta.length > 0) {
        dxta = dxta.slice(1);
      }

      while (dxta.length < totalPoints) {
        var prev = dxta.length > 0 ? dxta[dxta.length - 1] : 50,
            y =  Math.random() * 30 + 100;

        if (y < 0) {
            y = 0;
            // $scope.severeAlert('BATTERY LEVEL ZERO', 'This needs electrical team attention immediately.');
        } else if (y > 160) {
            y = 160;
        }

        dxta.push(y);
      }
      dxta.push(data);
      var res = [];

      time++;
      
      for (var i = 0; i < dxta.length; ++i) {
        res.push([time+i, dxta[i]]);
      }
      return res;

    }
        this.getMessageList = function(message) {
            modulesMessageCount[map[message.module]].value += 1;
            message.timeStamp = new Date();
            currentMessageList.unshift(message);
        }


        this.getDemoData = function(data) {
          self.demoDataArray = [getRandomData(data)]
          self.demoData = data;
          time++;
        }
        


        
        /**
         * @return {[Messages]} List of messages only sent from those who are selected 
         */
        this.selectedSensorMessageList = function() {
            var selectedMessages = [];

            for (var sensor in self.selectedSensors) {
                var sensorID = self.selectedSensors[sensor]["SSID"];
                var temp = self.messageList.filter(function(message) {
                    return message.id === sensorID;
                });
                selectedMessages.push.apply(selectedMessages, temp);
            }

            return selectedMessages;
        }

        /**
         * @return {[Modules]} Key and Value of module list and number 
         * of messages they have personally sent 
         */
        this.getModuleDistribution = function() {
            return modulesMessageCount;
        }

        /**
         * @param {Module} obj
         * @return {Int} percentage that given module has sent of total messages 
         */
        this.getModulePercentage = function(obj) {
            if (obj.value === undefined || currentMessageList.length === 0) {
                return 0;
            }
            return Math.round((obj.value / currentMessageList.length) * 100);
        }

        this.messageList = currentMessageList;

        /**
         * Starts the constant update of fake data for message list
         */
        // var promise;
        // this.updateRealtimeData = function() {
        //     self.messageList = getMessageList();
        //     $timeout.cancel(promise);
        //     promise = $timeout(self.updateRealtimeData, updateInterval);
        // };

        /**
         * Removes parameter sensor from our selected sensor list
         * @param {Sensor} sensor
         */
        this.removeSensorFromList = function(sensor) {
            console.log("Removing Sensor: " + sensor);
            var index = self.selectedSensors.indexOf(sensor);
            var SSID = sensor.SSID - 1;
            
            self.selectedSensors.splice(index, 1);
            self.gridOptions.selectRow(SSID, false);

            
            
          
        }
        this.getHaProxyData = function() {
            // $timeout(function() {
                $http.get('assets/haproxydata.json').success(function(stuff) {
                    console.log(stuff)
                    //if (data.up)
                });
            // }, 3000);

        }

       
        // this.resetSelection = function(sensor) {
        //     self.gridOptions.selectRow(sensor.SSID - 1, true);
        // }

        this.removeAll = function() {
            console.log("Removing all sensors");
            self.selectedSensors.length = 0;
            self.gridOptions.selectAll(false);
            


        }

        this.compareSelect = function(data) {
            for (var sensor in self.selectedSensors) {
                var sensorID = self.selectedSensors[sensor]["SSID"];
                var temp = data.filter(function(message) {
                    return message.id === sensorID;
                });
                
            }
                
                
                

            
        }

        /**
         * @param {Date} data
         * @return {String} 'timesince' + 'seconds/minutes/hours/months/years'
         */
        this.timeSince = function(date) {

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

    this.gridOptions = {
      data: 'myData',
      enablePaging: false,
      showFooter: true,
      totalServerItems: 'totalServerItems',
      pagingOptions: self.pagingOptions,
      filterOptions: self.filterOptions,
      columnDefs: self.columnDefs,
      selectedItems: self.selectedSensors,
      afterSelectionChange: function(data) {
        console.log("Sensor Selected:", self.selectedSensors);
      }
    };

    this.pagingOptions = {
      pageSizes: [25, 50, 100],
      pageSize: 1000,
      currentPage: 1
    };

     this.filterOptions = {
      filterText: '',
      useExternalFilter: true
    };

     this.columnDefs = 
    [
      {field: 'SSID', displayName: 'ID', width: 50}, 
      {field: 'Module', displayName: 'Module', width: 75},
      {field: 'Type', displayName: 'Type', width: 150},
      {field: 'Name', displayName: 'Name', width: 220},
      {field: 'Location', displayName: 'Location', width: 375},
    ];




    }]);
