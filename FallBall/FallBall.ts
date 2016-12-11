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
    let radius:number = Util.randomNumber(10,20);
    let location:VectorPoint = new VectorPoint(Util.randomNumber(radius,system.width - radius),Util.randomNumber(radius,system.height - radius));
    let velocity:VectorPoint = new VectorPoint(Util.randomNumber(-0.5,0.5),Util.randomNumber(-0.5,0.5));
    let acceleration:VectorPoint = new VectorPoint(Util.randomNumber(-0.01,0.01),Util.randomNumber(-0.01,0.01));

    let ball = new Ball(location,velocity,acceleration,radius);
    balls.push(ball);
  }
  system.pushObjects(balls);
}
function action(){
  system.clear();
  system.quadTree.refresh(null);
  for(let ball of balls){
    ball.collisionDetection(system);
    ball.move();
    ball.display(paint);
  }
  setTimeout(action,0);
}
