//
//  ViewController.swift
//  BLDashboard
//
//  Created by Chase Roossin on 12/12/15.
//  Copyright © 2015 BadgerLoop. All rights reserved.
//

import UIKit
import Riffle
import JSKTimerView
import SVProgressHUD
import SCLAlertView
import XCGLogger

class ViewController: UIViewController, RiffleDelegate {

    var app: RiffleDomain?
    var me: RiffleDomain?
    var container: RiffleDomain?
    let log = XCGLogger.defaultInstance()

    //Buttons and Gauges
    @IBOutlet weak var transmitButton: UIButton!
    @IBOutlet weak var LeftGauge: JSKTimerView!
    @IBOutlet weak var RightGauge: JSKTimerView!

    //Info Views
    @IBOutlet weak var LeftTopInfo: InfoView!
    @IBOutlet weak var LeftMiddleInfo: InfoView!
    @IBOutlet weak var LeftBottomInfo: InfoView!
    @IBOutlet weak var RightTopInfo: InfoView!
    @IBOutlet weak var RightMiddleInfo: InfoView!
    @IBOutlet weak var RightBottomInfo: InfoView!

    //Sensors
    var bpm, bpm2, ecm, ecm2, vcmA, vcmG, mcm, wcm: Sensor!

    @IBAction func beginTransmission(sender: AnyObject) {
        if(!transmitButton.selected){
            log.info("Calling backend")
            transmitButton.selected = true

            //User wants to begin receiving data from backend
            container!.call("transmit") { ( response: String) -> () in
                self.log.info(response)
                SCLAlertView().showWarning("Backend:", subTitle: response)
                self.transmitButton.selected = false
            }
        }else{
            SVProgressHUD.showInfoWithStatus("Already Transmitting")
        }
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        //This is your apps backend - Find it in Backend/main.swift
        app = RiffleDomain(domain: Config().domain)

        //Set up your domain
        me = RiffleDomain(name: "localagent", superdomain: app!)
        me!.delegate = self


        //Joining container with your token
        //Copy from: Auth() -> Authorized Key Management -> 'localagent' key
        me!.join(Config().localAgentKey)

        //Set up transmit button state
        transmitButton.setTitle("Begin Transmission", forState: .Normal)
        transmitButton.setTitle("Transmitting", forState: .Selected)

        //Config Gauges
        LeftGauge.labelTextColor = UIColor.whiteColor()
        RightGauge.labelTextColor = UIColor.whiteColor()

        //Config Sensors and Linking to View
        bpm = Sensor(title: "BPM", subtitle: "Optimal Energy", dataValue: 0.0, dataType: .RPM)
        LeftTopInfo.setSensor(bpm)

        bpm2 = Sensor(title: "BPM2", subtitle: "Battery Voltage", dataValue: 0.0, dataType: .VOLTS)
        LeftMiddleInfo.setSensor(bpm2)

        wcm = Sensor(title: "WCM", subtitle: "Latency", dataValue: 0.0, dataType: .LATENCY)
        LeftBottomInfo.setSensor(wcm)

        mcm = Sensor(title: "MCM", subtitle: "Proximity", dataValue: 0.0, dataType: .PROX)
        RightTopInfo.setSensor(mcm)

        vcmA = Sensor(title: "VCMA", subtitle: "Accelerometer", dataArrayValues: [0.0, 0.0, 0.0], dataType: .ACCEL)
        vcmG = Sensor(title: "VCMG", subtitle: "Gyroscope", dataArrayValues: [0.0, 0.0, 0.0], dataType: .ACCEL)
        RightMiddleInfo.setSensor(vcmA)

        ecm = Sensor(title: "ECM", subtitle: "Thermistor 1", dataValue: 0.0, dataType: .THERM)
        ecm2 = Sensor(title: "ECM2", subtitle: "Thermistor 2", dataValue: 0.0, dataType: .THERM)
        RightBottomInfo.setSensor(ecm)

        log.debug("All sensors initialized")
    }

    //Function called when joining backend ran successfuly
    func onJoin() {
        log.info("Dashboard is now connected")
        container = RiffleDomain(name: "container", superdomain: app!)

        //Subscribe to all the endpoints we've created
        self.container!.subscribe("bpm_optEn", self.updateOptEn)
        self.container!.subscribe("ecm_therm", self.updateTherm)
        self.container!.subscribe("ecm_therm2", self.updateTherm2)
        self.container!.subscribe("vcm_accel", self.updateAccel)
        self.container!.subscribe("vcm_gyro", self.updateGyro)
        self.container!.subscribe("mcm_prox", self.updateProx)
        self.container!.subscribe("wcm_latency", self.updateLatency)
        self.container!.subscribe("bpm2_battVolt", self.updateBattVolt)

        log.info("All endpoints subscribed to")

        //Show Setup Complete Notification
        SCLAlertView().showSuccess("Successful Setup", subTitle: "Initialized gauges and backend connection")

        //TESTING PURPOSES WHILE BUTTON ISNT UP - REMOVE *******************
        container!.call("transmit") { ( response: String) -> () in
            self.log.info(response)
            SCLAlertView().showWarning("Backend:", subTitle: response)
            self.transmitButton.selected = false
        }
    }

    func onLeave() {
        log.info("User has disconnected")
    }

    //Update gauges with returned data
    func updateOptEn(energy: Double){
        bpm.setValue(energy)
        log.debug(bpm.debug())
    }
    func updateBattVolt(voltage: Double){
        bpm2.setValue(voltage)
        log.debug(bpm2.debug())
    }
    func updateTherm(therm: Double){
        ecm.setValue(therm)
        log.debug(ecm.debug())
    }
    func updateTherm2(therm: Double){
        ecm2.setValue(therm)
        log.debug(ecm2.debug())
    }
    func updateAccel(accel: [Double]){
        vcmA.setValue(accel)
        log.debug(vcmA.debug())
    }
    func updateGyro(gyro: [Double]){
        vcmG.setValue(gyro)
        log.debug(vcmG.debug())
    }
    func updateProx(prox: Double){
        mcm.setValue(prox)
        log.debug(mcm.debug())
    }
    func updateLatency(latency: Double){
        wcm.setValue(latency)
        log.debug(wcm.debug())
    }
}

