//
//  main.swift
//  Backend
//
//  Created by Chase Roossin on 12/12/15.
//  Copyright © 2015 BadgerLoop. All rights reserved.
//

import Foundation
import Riffle

print("Starting up the backend...")

//This is your apps backend
//Change USERNAME to your username that you used to sign up with at my.exis.io
let app = RiffleDomain(domain: Config().domain)

class ContainerAgent: RiffleDomain {
    override func onJoin() {
        print("Registering from transmit")
        register("transmit", transmitData)
        print("Backend fully setup.")
    }

    //User called backend to start feeding it data
    //Lets give them pseudo temp data
    func transmitData() -> AnyObject{
        print("User called transmit")
        for x in 1...10{
            sleep(1)
            print("Sending Temp data to user: \(x)")
            self.publish("temp", x)
        }
        return "Finished Transmission"
    }
}



//Your container
let container = ContainerAgent(name: "container", superdomain: app)

//Joining container with your token
//Copy from: Auth() -> Authorized Key Management -> 'container' key
container.join(Config().containerKey)

NSRunLoop.currentRunLoop().run()
