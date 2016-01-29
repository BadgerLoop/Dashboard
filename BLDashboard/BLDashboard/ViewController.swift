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
        Riffle.setFabric("ws://192.168.1.4:8000/ws")

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
        bpm = Sensor(title: "BPM", subtitle: "Encoder", dataValue: 0.0, threshold: 2000.00, dataType: .RPM)
        LeftTopInfo.setSensor(bpm)

        bpm2 = Sensor(title: "BPM2", subtitle: "Batt. Voltage", dataValue: 0.0, threshold: 20.0, dataType: .VOLTS)
        LeftMiddleInfo.setSensor(bpm2)

        wcm = Sensor(title: "WCM", subtitle: "Latency", dataValue: 0.0, threshold: 1000.00, dataType: .LATENCY)
        LeftBottomInfo.setSensor(wcm)

        mcm = Sensor(title: "MCM", subtitle: "Prox.", dataValue: 0.0, threshold: 100.00, dataType: .PROX)
        RightTopInfo.setSensor(mcm)

        vcmA = Sensor(title: "VCMA", subtitle: "Accel: X, Y, Z", dataArrayValues: [0.0, 0.0, 0.0], dataType: .ACCEL)
        vcmG = Sensor(title: "VCMG", subtitle: "Gyro: Roll, Pitch, Yaw", dataArrayValues: [0.0, 0.0, 0.0], dataType: .GYRO)
        vcmA.setSiblings(vcmG)
        vcmG.setSiblings(vcmA)
        RightMiddleInfo.setSensor(vcmA)

        ecm = Sensor(title: "ECM", subtitle: "Therm. 1", dataValue: 0.0, threshold: 100.00, dataType: .THERM)
        ecm2 = Sensor(title: "ECM2", subtitle: "Therm. 2", dataValue: 0.0, threshold: 100.00, dataType: .THERM)
        ecm.setSiblings(ecm2)
        ecm2.setSiblings(ecm)
        RightBottomInfo.setSensor(ecm)

        //Initial sensors for 2 center gauges
        LeftSelectedSensor = bpm
        RightSelectedSensor = mcm
        updateGaugeUI()

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
        bpm.setValue(energy.roundToPlaces(2))
        LeftTopInfo.update()
        updateGaugeUI()
        log.debug(bpm.debug())
    }
    func updateBattVolt(voltage: Double){
        bpm2.setValue(voltage.roundToPlaces(2))
        LeftMiddleInfo.update()
        updateGaugeUI()
        log.debug(bpm2.debug())
    }
    func updateTherm(therm: Double){
        ecm.setValue(therm.roundToPlaces(2))
        RightBottomInfo.update()
        updateGaugeUI()
        log.debug(ecm.debug())
    }
    func updateTherm2(therm: Double){
        ecm2.setValue(therm.roundToPlaces(2))
        log.debug(ecm2.debug())
    }
    func updateAccel(accel1: Double, accel2: Double, accel3: Double){
        let listOfAccel: [Double] = [Double(accel1).roundToPlaces(2), Double(accel2).roundToPlaces(2), Double(accel3).roundToPlaces(2)] //3 decimal places
        vcmA.setValue(listOfAccel)
        RightMiddleInfo.update()
        updateGaugeUI()
        log.debug(vcmA.debug())
    }
    func updateGyro(gyro1: Double, gyro2: Double, gyro3: Double){
        let listOfGyro: [Double] = [Double(gyro1).roundToPlaces(2), Double(gyro2).roundToPlaces(2), Double(gyro3).roundToPlaces(2)] //3 decimal places
        vcmG.setValue(listOfGyro)
        updateGaugeUI()
        log.debug(vcmG.debug())
    }
    func updateProx(prox: Double){
        mcm.setValue(prox.roundToPlaces(2))
        RightTopInfo.update()
        updateGaugeUI()
        log.debug(mcm.debug())
    }
    func updateLatency(latency: Double){
        wcm.setValue(latency.roundToPlaces(2))
        LeftBottomInfo.update()
        updateGaugeUI()
        log.debug(wcm.debug())
    }

    //Set up Left and Right Gauges
    func SetLeftGauge(sensor: Sensor){
        LeftGauge.progress = CGFloat(sensor.dataValue!/sensor.threshold!)
        LeftGauge.setLabel("\(sensor.dataValue!) \(sensor.dataType.rawValue)")
        LeftGauge.setGaugeLabel(sensor.subtitle)
        LeftSelectedSensor = sensor
        log.debug("\nLEFT GAUGE: \(LeftSelectedSensor.debug())")
    }
    func SetRightGauge(sensor: Sensor){
        //Array of Data instead
        if(sensor.dataType == .ACCEL || sensor.dataType == .GYRO){
            RightGauge.progress = 0
            RightGauge.setLabel("\(sensor.dataArrayValues!) \(sensor.dataType.rawValue)")
            RightGauge.setGaugeLabel(sensor.subtitle)
            RightGauge.setProgressColor(ohShit(sensor)) //Check what color to make gauge - depending on upside down or too fast accell
            RightGauge.setLabelFontSize(20.0)
            RightSelectedSensor = sensor
        }else{
            RightGauge.progress = CGFloat(sensor.dataValue!/sensor.threshold!)
            RightGauge.setLabel("\(sensor.dataValue!) \(sensor.dataType.rawValue)")
            RightGauge.setGaugeLabel(sensor.subtitle)
            RightGauge.setLabelFontSize(30.0)
            RightSelectedSensor = sensor
        }
        log.debug("\nRIGHT GAUGE: \(RightSelectedSensor.debug())")
    }

    //Update gauge with newly passed in data
    func updateGaugeUI(){
        LeftGauge.progress = CGFloat(LeftSelectedSensor.dataValue!)
        LeftGauge.setLabel("\(LeftSelectedSensor.dataValue!) \(LeftSelectedSensor.dataType.rawValue)")
        LeftGauge.setGaugeLabel(LeftSelectedSensor.subtitle)
        if(RightSelectedSensor.dataType == .ACCEL || RightSelectedSensor.dataType == .GYRO){
            RightGauge.progress = 0
            RightGauge.setLabel("\(RightSelectedSensor.dataArrayValues!) \(RightSelectedSensor.dataType.rawValue)")
            RightGauge.setGaugeLabel(RightSelectedSensor.subtitle)
            RightGauge.setProgressColor(ohShit(RightSelectedSensor)) //Check what color to make gauge - depending on upside down or too fast accell
        }else{
            RightGauge.progress = CGFloat(RightSelectedSensor.dataValue!)
            RightGauge.setLabel("\(RightSelectedSensor.dataValue!) \(RightSelectedSensor.dataType.rawValue)")
            RightGauge.setGaugeLabel(RightSelectedSensor.subtitle)
        }
    }

    //Check if pod is upside down or accel too fast
    func ohShit(sensor: Sensor)->UIColor{
        let sensorData = sensor.dataArrayValues
        if(sensor.dataType == .GYRO){
            for axis in sensorData!{
                //If greater than 180.0 meaning upside down return red
                if axis > 180.0{return UIColor.redColor()}
            }
        }else{
            for accel in sensorData!{
                //If accel greater than 9.81 return red
                if accel > 9.81{return UIColor.redColor()}
            }
        }
        return UIColor.greenColor()
    }
}

extension ViewController : InfoViewDelegate{
    func InfoViewTapped(infoView: InfoView){
        //Tapped sensor belongs in right sensor
        if(rightGaugeTypes.contains(infoView.sensor.dataType)){
            //Check to see if you can access other siblings and then input them
            if((RightSelectedSensor === infoView.sensor) && infoView.sensor.sibling != nil){
                SetRightGauge(infoView.sensor.sibling!)
            }else{
                SetRightGauge(infoView.sensor)
            }
        }else{
            SetLeftGauge(infoView.sensor)
        }
    }
}

extension Double {
    /// Rounds the double to decimal places value
    func roundToPlaces(places:Int) -> Double {
        let divisor = pow(10.0, Double(places))
        return round(self * divisor) / divisor
    }
}

