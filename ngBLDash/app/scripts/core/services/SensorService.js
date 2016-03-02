angular
    .module('theme.core.services')
    .service('SensorService', ['$timeout', '$riffle', '$rootScope', function($timeout, $riffle, $rootScope) {
        'use strict';

        var self = this;


        //listen live for status updates
        $rootScope.$on('$riffle.open', function() {
            $riffle.subscribe("temp", getMessageList);
        });


        this.selectedSensors = [];

        var currentMessageList = [];
        var updateInterval = 1000;

        var modulesMessageCount = { "BPM1": 0, "BPM2": 0, "MCM": 0, "VCM": 0, "ECM": 0 };

        var fakeMessages = [{
            sensor: "Shaft Encoder 1",
            data: "12 rpm",
            id: "1",
            type: "Sensor",
            module: "BPM1",
            location: "Brake Axle"
        }, {
            sensor: "Limit Switch 1",
            data: "120 F",
            id: "3",
            type: "Sensor",
            module: "BPM1",
            location: "Boggie - Front left"
        }, {
            sensor: "Limit Switch 1",
            data: "120 F",
            id: "27",
            type: "Sensor",
            module: "BPM2",
            location: "Boggie - Front left"
        }, {
            sensor: "Tape Strip Detector",
            data: "True",
            id: "100",
            type: "Sensor",
            module: "VCM",
            location: "Boggie - Front left"
        }, {
            sensor: "Pressure Transducer 1",
            data: "98lb",
            id: "104",
            type: "Sensor",
            module: "ECM",
            location: "Cabin"
        }, {
            sensor: "Thermistor 11",
            data: "128 F",
            id: "115",
            type: "Sensor",
            module: "ECM",
            location: "BPM2 - solid state relay"
        }, {
            sensor: "Motor Controller 8",
            data: "24mph",
            id: "82",
            type: "Actuator",
            module: "MCM",
            location: "Motor 8 - Middle Right"
        }, {
            sensor: "Solid State Relay 3",
            data: "1345",
            id: "37",
            type: "Actuator",
            module: "BPM2",
            location: "Linear Actuator"
        }, {
            sensor: "Drum Brake Electromagnet 1",
            data: "2.34",
            id: "44",
            type: "Actuator",
            module: "BPM2",
            location: "Drum Brake Left Wheel Front"
        }];

        /**
         * Create random message, increment module count, timestamp, add to list
         * @return {[Messages]} List of all messages 
         */
        var getMessageList = function(message) {
            var tempMessage = message;
            modulesMessageCount[tempMessage.module] ?
                modulesMessageCount[tempMessage.module].value += 1 :
                modulesMessageCount[tempMessage.module] = { value: 1 };
            tempMessage.timeStamp = new Date();
            currentMessageList.unshift(tempMessage);
            // return currentMessageList;
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
            if (obj.value === undefined) {
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
