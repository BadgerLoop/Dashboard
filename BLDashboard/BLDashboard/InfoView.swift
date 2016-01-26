//
//  InfoView.swift
//  BLDashboard
//
//  Created by Chase Roossin on 1/24/16.
//  Copyright © 2016 BadgerLoop. All rights reserved.
//

import UIKit

protocol InfoViewDelegate{
    func InfoViewTapped(infoView: InfoView)
}

class InfoView: UIView {

    @IBOutlet weak var dataLabel: UILabel!
    @IBOutlet weak var sensorLabel: UILabel!

    var sensor: Sensor!
    var delegate : InfoViewDelegate? = nil

    override init(frame: CGRect) {
        super.init(frame: frame)
        loadViewFromNib()
    }
    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        loadViewFromNib()
    }
    func loadViewFromNib() {
        let bundle = NSBundle(forClass: self.dynamicType)
        let nib = UINib(nibName: "InfoView", bundle: bundle)
        let view = nib.instantiateWithOwner(self, options: nil)[0] as! UIView
        view.frame = bounds
        view.autoresizingMask = [.FlexibleWidth, .FlexibleHeight]

        //Add touch gesture to entire InfoView
        let gesture = UITapGestureRecognizer(target: self, action: "viewTapped:")
        view.addGestureRecognizer(gesture)

        self.addSubview(view);
    }

    //Called when given InfoView tapped
    func viewTapped(sender:UITapGestureRecognizer){
        self.delegate?.InfoViewTapped(self)
    }
    //Set Views sensor
    func setSensor(sensor: Sensor){
        self.sensor = sensor
        self.update()
    }
    //Update InfoView's UI
    func update(){
        switch(sensor.dataType){
        case .ACCEL:
            self.sensorLabel.text = sensor.subtitle
            self.dataLabel.text = "\(sensor.dataArrayValues!) \(sensor.dataType.rawValue)"
        default:
            self.sensorLabel.text = sensor.subtitle
            self.dataLabel.text = "\(sensor.dataValue!) \(sensor.dataType.rawValue)"
        }
    }
    func getData() -> String{
        return "Data: \(dataLabel.text) \nSensor: \(sensorLabel.text)"
    }
}
