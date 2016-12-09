import {VectorPoint} from "../Common/js/VectorPoint"
import {System} from "../Common/js/System"
import {Paint} from "../Common/js/Paint"
import {Ball} from "../Common/js/Ball"
import {NatrueObject} from "../Common/js/NatrueObject"
import {Util} from "../Common/js/Util"

let system:System;
let paint:Paint;
let balls:NatrueObject[] = [];
let number = 20;
init();
action();

function init(){
  system = new System(<HTMLCanvasElement>document.getElementById("canvas"));
  paint = new Paint(system.canvas.getContext("2d"));
  paint.setFillStyle('rgba(192, 80, 77, 0.8)');
  for(let i = 0;i < number ;i++){
    let location:VectorPoint = new VectorPoint(Util.randomNumber(10,200),Util.randomNumber(10,200));
    let velocity:VectorPoint = new VectorPoint(Util.randomNumber(0,0.5),Util.randomNumber(0,0.5));
    let acceleration:VectorPoint = new VectorPoint(Util.randomNumber(0,0.01),Util.randomNumber(0,0.01));
    let radius:number = Util.randomNumber(10,20);
    let ball = new Ball(location,velocity,acceleration,radius);
    balls.push(ball);
  }
}
function action(){
  system.clear();
  for(let ball of balls){
    ball.collisionDetection(system);
    ball.move();
    ball.display(paint);
  }
  setTimeout(action,0);
}
