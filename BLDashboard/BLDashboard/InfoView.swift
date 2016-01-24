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

    func setData(data: Double){
        self.dataLabel.text = "\(data)"
    }
    func setSensor(sensor: String){
        self.sensorLabel.text = sensor
    }
    func setUpView(data: Double, sensor: String){
        dataLabel.text = "\(data)"
        sensorLabel.text = sensor
    }
    func getData() -> String{
        return "Data: \(dataLabel.text) \nSensor: \(sensorLabel.text)"
    }
}
