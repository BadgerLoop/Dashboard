//
//  ProgressGaugeManager.swift
//  BLDashboard
//
//  Created by Chase Roossin on 12/15/15.
//  Copyright © 2015 BadgerLoop. All rights reserved.
//

import Foundation
import UIKit
import KYCircularProgress

class ProgressGaugeManager{

    //This class function generates a halfcircle progress view
    //TODO: Center in view
    class func configureGauge(view: UIView, var gauge: KYCircularProgress?) -> KYCircularProgress{
        print("Configuring Gauge...")
        print("Center \(view.center)")
        let halfCircularProgressFrame = CGRectMake(0, 0, CGRectGetWidth(view.frame), CGRectGetHeight(view.frame)/2)
        gauge = KYCircularProgress(frame: halfCircularProgressFrame, showProgressGuide: true)

        let center = CGPoint(x: view.center.x, y: view.center.y)
        gauge!.path = UIBezierPath(arcCenter: center, radius: CGFloat(CGRectGetWidth(gauge!.frame)/8), startAngle: CGFloat(M_PI), endAngle: CGFloat(0.0), clockwise: true)
        gauge!.colors = [UIColor.whiteColor()]
        gauge!.lineWidth = 8.0
        gauge!.progressGuideColor = UIColor(red: 0.1, green: 0.1, blue: 0.1, alpha: 0.4)

        let textLabel = UILabel(frame: CGRectMake(gauge!.frame.origin.x + 120.0, 170.0, 80.0, 32.0))
        textLabel.font = UIFont(name: "HelveticaNeue-UltraLight", size: 32)
        textLabel.textAlignment = .Center
        textLabel.textColor = UIColor.greenColor()
        textLabel.alpha = 0.3
        gauge!.addSubview(textLabel)

        gauge!.progressChangedClosure() {
            (progress: Double, circularView: KYCircularProgress) in
            textLabel.text = "\(Int(progress * 100.0))%"
        }

        view.addSubview(gauge!)

        return gauge!
    }
}