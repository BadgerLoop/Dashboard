//
//  InfoView.swift
//  BLDashboard
//
//  Created by Chase Roossin on 1/24/16.
//  Copyright © 2016 BadgerLoop. All rights reserved.
//

import UIKit

class InfoView: UIView {

    @IBOutlet weak var dataLabel: UILabel!
    @IBOutlet weak var sensorLabel: UILabel!

    var sensor: Sensor!

    override init(frame: CGRect) {
        super.init(frame: frame)
        loadViewFromNib ()
    }
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        loadViewFromNib ()
    }
    func loadViewFromNib() {
        let bundle = NSBundle(forClass: self.dynamicType)
        let nib = UINib(nibName: "InfoView", bundle: bundle)
        let view = nib.instantiateWithOwner(self, options: nil)[0] as! UIView
        view.frame = bounds
        view.autoresizingMask = [.FlexibleWidth, .FlexibleHeight]
        self.addSubview(view);
    }

    func setData(sensor: Sensor){
        self.dataLabel.text = "\(sensor.dataValue) \(sensor.dataType.rawValue)"
    }
    func setSensor(sensor: Sensor){
        self.sensor = sensor
        self.sensorLabel.text = sensor.subtitle
        self.dataLabel.text = "\(sensor.dataValue) \(sensor.dataType.rawValue)"
    }
    func getData() -> String{
        return "Data: \(dataLabel.text) \nSensor: \(sensorLabel.text)"
    }
}
