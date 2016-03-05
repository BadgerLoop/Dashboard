angular
    .module('theme.core.services')
    .service('SensorService', ['$timeout', '$riffle', function($timeout, $riffle) {
        'use strict';

        var self = this;

        this.selectedSensors = [];


        var currentMessageList = [];
        var updateInterval = 1000;
        var map = {'BPM1': 0, 'BPM2': 1, 'MCM': 2, "VCM": 3, 'ECM': 4};
        var modulesMessageCount = [ {name: "BPM1", value: 0}, {name: "BPM2", value: 0}, {name: "MCM", value: 0}, {name: "VCM", value: 0}, {name: "ECM", value: 0 }];

        /**
         * Create random message, increment module count, timestamp, add to list
         * @return {[Messages]} List of all messages 
         */
        this.getMessageList = function(message) {
            modulesMessageCount[map[message.module]].value += 1;
            message.timeStamp = new Date();
            currentMessageList.unshift(message);
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
            self.selectedSensors.splice(index, 1);
        }

        this.removeAll = function() {
            console.log("Removing all sensors");
            self.selectedSensors.length = 0;  
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

    }]);
