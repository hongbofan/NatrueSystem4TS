import {VectorPoint} from "../Common/js/VectorPoint";
import {System} from "../Common/js/System";
import {Paint} from "../Common/js/Paint";


let system:System;
let paint:Paint;
let point: VectorPoint;
init();
walk();
function init(){
  system = new System(<HTMLCanvasElement>document.getElementById("canvas"));
  paint = new Paint(system.canvas.getContext("2d"));
  paint.setFillStyle('rgba(192, 80, 77, 0.1)');
  point = new VectorPoint(system.width/2,system.height/2);
}
function walk(){
  point.add(new VectorPoint((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20));
  point.display(paint);
  setTimeout(walk, 0);
}
