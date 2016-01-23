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

class ViewController: UIViewController, RiffleDelegate {

    var app: RiffleDomain?
    var me: RiffleDomain?
    var container: RiffleDomain?

    @IBOutlet weak var transmitButton: UIButton!
    @IBOutlet weak var LeftGauge: JSKTimerView!
    @IBOutlet weak var RightGauge: JSKTimerView!

    @IBAction func beginTransmission(sender: AnyObject) {
        if(!transmitButton.selected){
            print("Calling backend")
            transmitButton.selected = true

            //User wants to begin receiving data from backend
            container!.call("transmit") { ( response: String) -> () in
                print(response)
                SCLAlertView().showWarning("Backend:", subTitle: response)
                self.transmitButton.selected = false
            }
        }else{
//            SCLAlertView().showWarning("Already Transmitting", subTitle: "")
//            let alertView = SCLAlertView()
//            alertView.showCloseButton = true
//            alertView.addButton("Stop Transmitting") {
//                print("User wants to stop receiving data")
//                self.container!.call("stop_transmit") { ( response: String) -> () in
//                    print(response)
//                    SCLAlertView().showWarning("Backend:", subTitle: response)
//                    self.transmitButton.selected = false
//                }
//            }
//            alertView.showWarning("Already Transmitting", subTitle: "What would you like to do?")
            SCLAlertView().showWarning("Already Transmitting", subTitle: "")
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
    }

    //Function called when joining backend ran successfuly
    func onJoin() {
        print("User joined!")
        container = RiffleDomain(name: "container", superdomain: app!)

        //Begin to subscribe to temp gauge datastream
        //Everytime backend publishes new temp, update temp gauge in updateTemp()
        self.container!.subscribe("temp", self.updateTemp)

        //Show Setup Complete Notification
        SCLAlertView().showSuccess("Successful Setup", subTitle: "Initialized gauges and backend connection")
    }

    func onLeave() {
        print("Session left!")
    }

    //Update temp gauge with returned data
    func updateTemp(temp: Int){
        let preciseTemp = CGFloat(temp)/100
        print("Temp received: \(preciseTemp) degrees")
        LeftGauge.progress = preciseTemp
    }
}

