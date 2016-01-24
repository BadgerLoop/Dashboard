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

    @IBOutlet weak var transmitButton: UIButton!
    @IBOutlet weak var LeftGauge: JSKTimerView!
    @IBOutlet weak var RightGauge: JSKTimerView!

    @IBOutlet weak var TopLeftInfo: InfoView!


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

        //Setting up gauges

        //Set up transmit button state
        transmitButton.setTitle("Begin Transmission", forState: .Normal)
        transmitButton.setTitle("Transmitting", forState: .Selected)

        //Config Gauges
        LeftGauge.labelTextColor = UIColor.whiteColor()
        RightGauge.labelTextColor = UIColor.whiteColor()

        TopLeftInfo.setData(10.0)
        TopLeftInfo.setSensor("GYRO")

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
    }

    func onLeave() {
        log.info("User has disconnected")
    }

    //Update gauges with returned data
    func updateOptEn(energy: Double){
        log.info("Energy: \(energy)")
    }
    func updateTherm(therm: Double){
        log.info("Therm: \(therm)")
    }
    func updateTherm2(therm: Double){
        log.info("Therm_2: \(therm)")
    }
    func updateAccel(accel: Double){
        log.info("Accel: \(accel)")
    }
    func updateGyro(gyro: Double){
        log.info("Gyro: \(gyro)")
    }
    func updateProx(prox: Double){
        log.info("Prox: \(prox)")
    }
    func updateLatency(latency: Double){
        log.info("Latency: \(latency)")
    }
    func updateBattVolt(voltage: Double){
        log.info("BatVolt: \(voltage)")
    }
}

