//
//  Sensor.swift
//  BLDashboard
//
//  Created by Chase Roossin on 1/25/16.
//  Copyright © 2016 BadgerLoop. All rights reserved.
//

import Foundation

class Sensor {
    var title: String
    var subtitle: String
    var dataValue: Double
    var dataType: DataType

    init(title: String, subtitle: String, dataValue: Double, dataType: DataType){
        self.title = title
        self.subtitle = subtitle
        self.dataValue = dataValue
        self.dataType = dataType
    }

    enum DataType: String{
        case RPM = "RPM"
        case THERM = "Degrees C"
        case ACCEL = "X, Y, Z"
        case PROX = "Millimeters"
        case BFIELD = "Teslas"
        case LATENCY = "ms"
        case VOLTS = "volts"
    }

    func setValue(value: Double){
        self.dataValue = value
    }
}