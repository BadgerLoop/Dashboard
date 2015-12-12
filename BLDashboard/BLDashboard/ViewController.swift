//
//  ViewController.swift
//  BLDashboard
//
//  Created by Chase Roossin on 12/12/15.
//  Copyright © 2015 BadgerLoop. All rights reserved.
//

import UIKit
import Riffle

class ViewController: UIViewController, RiffleDelegate {

    var app: RiffleDomain?
    var me: RiffleDomain?
    var container: RiffleDomain?


    override func viewDidLoad() {
        super.viewDidLoad()

        //This is your apps backend - Find it in Backend/main.swift
        app = RiffleDomain(domain: "xs.demo.badgerloop.bldashboard")

        //Set up your domain
        me = RiffleDomain(name: "localagent", superdomain: app!)
        me!.delegate = self


        //Joining container with your token
        //Copy from: Auth() -> Authorized Key Management -> 'localagent' key
        me!.join("A-ox9WOI.mSxcJ8dQCdyVunYtISCPptVG1IuSsLU7iV2DVxFMhLeaU8EaHzlhWeB3xlZ6FBqHQTRpZmUcXtxVnqH6wzgxoJEk3KfwcEd1KwRe1DpQ3oURbSzt5P-F.F95bEp-nTE.lGiphtFXwRQ0CXx-a14QocjsZWw4-eCZmk_")
    }

    //Function called when joining backend ran successfuly
    func onJoin() {
        print("User joined!")
        container = RiffleDomain(name: "container", superdomain: app!)
    }

    func onLeave() {
        print("Session left!")
    }
}
