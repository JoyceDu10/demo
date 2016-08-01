import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
declare var d3: any;
@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
  private imgtag: any;
  public imageMap: any;
  constructor(private navCtrl: NavController) {
 
  }
  ngAfterViewInit(){
    this.imgtag = document.getElementById("myimage");
    //Setting Default Image, you can load any image using input box.
    this.imgtag.src = "images/sans_512.jpg";
    this.imgtag.onload = this.render.bind(this);
    this.imageMap = d3.imageMap()
                    .setMode('play')
                    .setImageSize([500,700]);
  }

  setMode(_){
    d3.select(_==='play'?'#slider':'#play').style('background-color','rgb(255, 255, 255)')
    d3.select('#'+_).style('background-color','rgb(150, 236, 241)')
    if(_ == 'play')
      d3.select('#msg').style('display','block');
    else
      d3.select('#msg').style('display','none');

    this.imageMap.setMode(_);
    this.render(); 
  }


    render(){
        this.imageMap.buildCanvas();
        d3.select('#chart').selectAll('svg').remove();
        var svg = d3.select('#chart')
                  .append('svg')
                  .call(this.imageMap);
  }

}
