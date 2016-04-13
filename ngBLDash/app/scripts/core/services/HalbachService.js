angular
  .module('theme.core.services')
  .service('HalbachService',['$timeout', function($timeout) {
    'use strict';

    var self = this;
    
    this.leftStatus = "stable";
    this.rightStatus = "stable";

    
    self.wheels = [ 
    {name: "Left1", rpm: 0, temp: 0, gap: 0, gaptype: '', temptype: '', rpmtype: '', totaltype: ''}, 
    {name: "Left2", rpm: 0, temp: 0, gap: 0, gaptype: '', temptype: '', rpmtype: '', totaltype: ''}, 
    {name: "Left3", rpm: 0, temp: 0, gap: 0, gaptype: '', temptype: '', rpmtype: '', totaltype: ''}, 
    {name: "Left4", rpm: 0, temp: 0, gap: 0, gaptype: '', temptype: '', rpmtype: '', totaltype: ''}, 
    {name: "Left5", rpm: 0, temp: 0, gap: 0, gaptype: '', temptype: '', rpmtype: '', totaltype: ''},
    {name: "Right1", rpm: 0, temp: 0, gap: 0, gaptype: '', temptype: '', rpmtype: '', totaltype: ''}, 
    {name: "Right2", rpm: 0, temp: 0, gap: 0, gaptype: '', temptype: '', rpmtype: '', totaltype: ''}, 
    {name: "Right3", rpm: 0, temp: 0, gap: 0, gaptype: '', temptype: '', rpmtype: '', totaltype:''}, 
    {name: "Right4", rpm: 0, temp: 0, gap: 0, gaptype: '', temptype: '', rpmtype: '', totaltype: ''}, 
    {name: "Right5", rpm: 0, temp: 0, gap: 0, gaptype: '', temptype: '', rpmtype: '', totaltype: ''}

    ];
    
    

  var getData = function() {
    var wheeldata = [];

    for(var wheel in self.wheels) {

      self.wheels[wheel].rpm = Math.round((Math.random() * 1000) + 5000);
      self.wheels[wheel].temp = Math.round(Math.random() * 130);
      self.wheels[wheel].gap = (Math.random() * 5).toFixed(2);
      var rpm = self.wheels[wheel].rpm;
      var temp = self.wheels[wheel].temp;
      var gap = self.wheels[wheel].gap;
      var gaptype = self.wheels[wheel].gaptype;
      var temptype = self.wheels[wheel].temptype;
      var rpmtype = self.wheels[wheel].rpmtype;
      var totaltype = self.wheels[wheel].totaltype;
      console.log("gap: " + gap + " rpm: " + rpm + " temp: " + temp + " " + gaptype + " " + rpmtype + " " + temptype + " " + totaltype)
      

      //GAP EVAL
      if (gap > 4.55) {
        self.wheels[wheel].gaptype = 'medium label label-success';
      } else if ((2.55 < gap) && (gap < 4.55)) {
        self.wheels[wheel].gaptype = 'medium label label-warning';
      } else if (gap < 2.56) {
        self.wheels[wheel].gaptype = 'medium label label-danger';
      } else {
        self.wheels[wheel].gaptype = 'medium label label-default';

      }

      //TEMP EVAL
      if (temp < 80) {
        self.wheels[wheel].temptype = 'medium label label-success';
      } else if ((80 < temp) && (temp < 119)) {
        self.wheels[wheel].temptype = 'medium label label-warning';
      } else if (temp > 119) {
        self.wheels[wheel].temptype = 'medium label label-danger';
      } else {
        self.wheels[wheel].temptype = 'medium label label-default';
      }

      //RPM EVAL
      if (rpm < 5500) {
        self.wheels[wheel].rpmtype = 'big label label-success';
      } else if ((5500 < rpm) && (rpm < 5999)) {
        self.wheels[wheel].rpmtype = 'big label label-warning';
      } else if (rpm > 6000) {
        self.wheels[wheel].rpmtype = 'big label label-danger';
      } else {
        self.wheels[wheel].rpmtype = 'big label label-default';
      }

      // total success/warning/danger EVAL
      if((gap < 2.56) || (temp > 119) || (rpm > 6000)){
        self.wheels[wheel].totaltype = 'big label label-danger';
      }
/*      else if(((2.55 < gap) && (gap < 4.55)) || ((80 < temp) && (temp < 119))|| ((5500 < rpm) && (rpm < 5999))){
        self.wheels[wheel].totaltype = '';
      }*/
      else{
        self.wheels[wheel].totaltype = 'big label label-success';
      }

    }
    return self.wheels;
  }

    var dxta = [],
      totalPoints = 20;
    var updateInterval = 500;

   
    
    /**
     * Starts the constant update of fake data for batt. voltage
     */
    var promise;
    this.updateWheels = function() {
      self.realtimeData = [getData()];
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
