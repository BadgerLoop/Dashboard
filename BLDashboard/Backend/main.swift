//
//  main.swift
//  Backend
//
//  Created by Chase Roossin on 12/12/15.
//  Copyright © 2015 BadgerLoop. All rights reserved.
//

import Foundation
import Riffle
import XCGLogger

print("Starting up the backend...")

//This is your apps backend
let app = RiffleDomain(domain: Config().domain)

let log = XCGLogger.defaultInstance()

var transmitting = true

class ContainerAgent: RiffleDomain {
    override func onJoin() {
        print("Registering from transmit")
        register("transmit", transmitData)
        register("stop_transmit", stopTransmit)
        print("Backend fully setup.")
    }

    //User called backend to start feeding it data
    //Lets give them pseudo temp data
    func transmitData() -> AnyObject{
        transmitting = true

        print("User called transmit")
        for x in 1...100{

            var rando = Double(arc4random_uniform(100) + 1)
            rando = rando/100

            sleep(1)
            print(transmitting)
            if(transmitting){
                print("Sending Temp data to user: \(x)")
//                self.publish("temp", rando)
            }
        }
        return "Finished Transmission"
    }

    //Stops transmission
    func stopTransmit() -> AnyObject{
        print("Stop transmit called")
        transmitting = false
        return "We have stopped transmitting data to Dashboard"
    }
}



//Your container
let container = ContainerAgent(name: "container", superdomain: app)

//Joining container with your token
//Copy from: Auth() -> Authorized Key Management -> 'container' key
container.join(Config().containerKey)

NSRunLoop.currentRunLoop().run()
