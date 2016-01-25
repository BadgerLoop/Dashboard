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
    var dataValue: Double?
    var dataArrayValues: [Double]?
    var dataType: DataType

    //Init for all sensors excluding Gyro and Accel
    init(title: String, subtitle: String, dataValue: Double, dataType: DataType){
        self.title = title
        self.subtitle = subtitle
        self.dataValue = dataValue
        self.dataType = dataType
    }

    //Init for Gyro and Accell
    init(title: String, subtitle: String, dataArrayValues: [Double], dataType: DataType){
        self.title = title
        self.subtitle = subtitle
        self.dataArrayValues = dataArrayValues
        self.dataType = dataType
    }

    enum DataType: String{
        case RPM = "RPM"
        case THERM = "\u{00B0} F" //degrees Fahrenheit
        case ACCEL = "X, Y, Z"
        case PROX = "mm"
        case BFIELD = "Teslas"
        case LATENCY = "ms"
        case VOLTS = "volts"
    }

    //For all sensors excluding Gyro and Accel
    func setValue(value: Double){
        self.dataValue = value
    }

    //For setting Gyro/Accel
    func setValue(values: [Double]){
        self.dataArrayValues = values
    }

    //Debug printing purposes
    func debug() -> String{
        switch(dataType){
        case .ACCEL:
            return "\nSensor: \(title)\nSubtitle: \(subtitle)\nData Values: \(dataArrayValues)\nData Type: \(dataType)\n"
        default:
            return "\nSensor: \(title)\nSubtitle: \(subtitle)\nData Value: \(dataValue)\nData Type: \(dataType)\n"
        }

    }
}