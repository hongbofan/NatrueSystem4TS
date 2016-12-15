import {System} from "../Common/js/System"
import {VectorPoint} from "../Common/js/VectorPoint"
import {Paint} from "../Common/js/Paint"
import {Util} from  "../Common/js/Util"
let system:System;
let paint:Paint;
let a = 100;
let Alpha = 0.7;
let forlength = 20;
init();
function init(){
  system = new System(<HTMLCanvasElement>document.getElementById("canvas"));
  paint = new Paint(system.canvas.getContext("2d"));

  for(let i = 0 ;i<forlength;i++){
    let canvasAngle = i*360/forlength;
    // if(i != 8){
    //   Alpha = 0.1;
    // }else{
    //   Alpha = 1;
    // }
    //Alpha = Alpha - 0.1;
    paint.setFillStyle('rgba(192, 80, 77,'+ Alpha +')');
    paint.rotate(canvasAngle,system.width/2,system.height/2);
    for(let angle = 0;angle <= 360;angle++){
      let p = a*(1-Math.cos(angle));
      //let p = 10;
      let point = new VectorPoint(0,0).polar2Rectangular(angle,p);
      point.x += system.width/2;
      point.y += system.height/2;
      point.display(paint);
    }
    //a+=10;
    paint.rotate(-1*canvasAngle,system.width/2,system.height/2);
  }

}
