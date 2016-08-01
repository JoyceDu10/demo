import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
declare var loadLiquidFillGauge: any;
declare var liquidFillGaugeDefaultSettings: any;
@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
  private gauge1: any;
  private gauge2: any;
  constructor(private navCtrl: NavController)  {

  }
  

  ngAfterViewInit() { 
    this.gauge1 = loadLiquidFillGauge("fillgauge1", 55);
    var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#FF7777";
    config1.textColor = "#FF4444";
    config1.waveTextColor = "#FFAAAA";
    config1.waveColor = "#FFDDDD";
    config1.circleThickness = 0.2;
    config1.textVertPosition = 0.2;
    config1.waveAnimateTime = 1000;
    this.gauge2= loadLiquidFillGauge("fillgauge2", 28, config1);
    var config2 = liquidFillGaugeDefaultSettings();
    config2.circleColor = "#D4AB6A";
    config2.textColor = "#553300";
    config2.waveTextColor = "#805615";
    config2.waveColor = "#AA7D39";
    config2.circleThickness = 0.1;
    config2.circleFillGap = 0.2;
    config2.textVertPosition = 0.8;
    config2.waveAnimateTime = 2000;
    config2.waveHeight = 0.3;
    config2.waveCount = 1;

  }

  gaugeUpdate (){
      this.gauge1.update(this.NewValue());
  }
  gaugeUpdate2 (){
      this.gauge2.update(this.NewValue());
  }
  NewValue (){
      if(Math.random() > .5){
          return +Math.round(Math.random()*100);
      } else {
          return +(Math.random()*100).toFixed(1);
      }
  }
 
}
