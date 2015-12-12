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
let app = RiffleDomain(domain: "xs.demo.badgerloop.bldashboard")

class ContainerAgent: RiffleDomain {
    override func onJoin() {
        print("Backend fully setup")
    }
}

//Your container
let container = ContainerAgent(name: "container", superdomain: app)

//Joining container with your token
//Copy from: Auth() -> Authorized Key Management -> 'container' key
container.join("jRyWJzO6nbZeCvjnYcddp3TsblyACIWg00sRAe6GiZFYVs534rH4dQdeNqDD1n5Eylffo8Uep4wSYdV4dAKGwZ4HQ4cwLNJD8.9QjMopiagDW1b3nJ66isicMFh4TG.Xhx7h8IuDjpCn1D2NsA-4AKM5xDqUqlUr8xfr14cicCw_")

NSRunLoop.currentRunLoop().run()
