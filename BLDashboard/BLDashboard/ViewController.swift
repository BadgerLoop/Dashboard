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
    @IBOutlet weak var LeftTopInfo: InfoView!{
        didSet{
            LeftTopInfo.delegate = self
        }
    }
    @IBOutlet weak var LeftMiddleInfo: InfoView!{
        didSet{
            LeftMiddleInfo.delegate = self
        }
    }
    @IBOutlet weak var LeftBottomInfo: InfoView!{
        didSet{
            LeftBottomInfo.delegate = self
        }
    }
    @IBOutlet weak var RightTopInfo: InfoView!{
        didSet{
            RightTopInfo.delegate = self
        }
    }
    @IBOutlet weak var RightMiddleInfo: InfoView!{
        didSet{
            RightMiddleInfo.delegate = self
        }
    }
    @IBOutlet weak var RightBottomInfo: InfoView!{
        didSet{
            RightBottomInfo.delegate = self
        }
    }

    //Sensors
    var bpm, bpm2, ecm, ecm2, vcmA, vcmG, mcm, wcm: Sensor!
    var LeftSelectedSensor : Sensor! = nil
    var RightSelectedSensor : Sensor! = nil

    //Gauges
    let rightGaugeTypes : [Sensor.DataType] = [.ACCEL, .PROX, .THERM]

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

        //For local node - will need to remove local host and set to static IP
        Riffle.setFabric("ws://localhost:8000/ws")

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
        bpm = Sensor(title: "BPM", subtitle: "Opt. Energy", dataValue: 0.0, dataType: .RPM)
        LeftTopInfo.setSensor(bpm)

        bpm2 = Sensor(title: "BPM2", subtitle: "Batt. Voltage", dataValue: 0.0, dataType: .VOLTS)
        LeftMiddleInfo.setSensor(bpm2)

        wcm = Sensor(title: "WCM", subtitle: "Latency", dataValue: 0.0, dataType: .LATENCY)
        LeftBottomInfo.setSensor(wcm)

        mcm = Sensor(title: "MCM", subtitle: "Prox.", dataValue: 0.0, dataType: .PROX)
        RightTopInfo.setSensor(mcm)

        vcmA = Sensor(title: "VCMA", subtitle: "Accel", dataArrayValues: [0.0, 0.0, 0.0], dataType: .ACCEL)
        vcmG = Sensor(title: "VCMG", subtitle: "Gyro", dataArrayValues: [0.0, 0.0, 0.0], dataType: .ACCEL)
        RightMiddleInfo.setSensor(vcmA)

        ecm = Sensor(title: "ECM", subtitle: "Therm. 1", dataValue: 0.0, dataType: .THERM)
        ecm2 = Sensor(title: "ECM2", subtitle: "Therm. 2", dataValue: 0.0, dataType: .THERM)
        RightBottomInfo.setSensor(ecm)

        LeftSelectedSensor = bpm
        RightSelectedSensor = mcm

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
    }

    func onLeave() {
        log.info("User has disconnected")
    }

    //Update gauges with returned data
    func updateOptEn(energy: Double){
        bpm.setValue(energy)
        LeftTopInfo.update()
        updateGaugeUI()
        log.debug(bpm.debug())
    }
    func updateBattVolt(voltage: Double){
        bpm2.setValue(voltage)
        LeftMiddleInfo.update()
        updateGaugeUI()
        log.debug(bpm2.debug())
    }
    func updateTherm(therm: Double){
        ecm.setValue(therm)
        RightBottomInfo.update()
        updateGaugeUI()
        log.debug(ecm.debug())
    }
    func updateTherm2(therm: Double){
        ecm2.setValue(therm)
        log.debug(ecm2.debug())
    }
    func updateAccel(accel: [Double]){
        vcmA.setValue(accel)
        RightMiddleInfo.update()
        updateGaugeUI()
        log.debug(vcmA.debug())
    }
    func updateGyro(gyro: [Double]){
        vcmG.setValue(gyro)
        log.debug(vcmG.debug())
    }
    func updateProx(prox: Double){
        mcm.setValue(prox)
        RightTopInfo.update()
        updateGaugeUI()
        log.debug(mcm.debug())
    }
    func updateLatency(latency: Double){
        wcm.setValue(latency)
        LeftBottomInfo.update()
        updateGaugeUI()
        log.debug(wcm.debug())
    }

    //Set up Left and Right Gauges
    func SetLeftGauge(sensor: Sensor){
        LeftGauge.progress = CGFloat(sensor.dataValue!)
        LeftGauge.setLabel("\(sensor.dataValue!) \(sensor.dataType.rawValue)")
        LeftSelectedSensor = sensor
        log.debug("\nLEFT GAUGE: \(LeftSelectedSensor.debug())")
    }
    func SetRightGauge(sensor: Sensor){
        RightGauge.progress = CGFloat(sensor.dataValue!)
        RightGauge.setLabel("\(sensor.dataValue!) \(sensor.dataType.rawValue)")
        RightSelectedSensor = sensor
        log.debug("\nRIGHT GAUGE: \(RightSelectedSensor.debug())")
    }

    //Update gauge with newly passed in data
    func updateGaugeUI(){
        LeftGauge.progress = CGFloat(LeftSelectedSensor.dataValue!)
        LeftGauge.setLabel("\(LeftSelectedSensor.dataValue!) \(LeftSelectedSensor.dataType.rawValue)")
        RightGauge.progress = CGFloat(RightSelectedSensor.dataValue!)
        RightGauge.setLabel("\(RightSelectedSensor.dataValue!) \(RightSelectedSensor.dataType.rawValue)")
    }
}

extension ViewController : InfoViewDelegate{
    func InfoViewTapped(infoView: InfoView){
        //Tapped sensor belongs in right sensor
        if(rightGaugeTypes.contains(infoView.sensor.dataType)){
            SetRightGauge(infoView.sensor)
        }else{
            SetLeftGauge(infoView.sensor)
        }
    }
}

