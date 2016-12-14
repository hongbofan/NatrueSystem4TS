import {VectorPoint} from "../Common/js/VectorPoint"
import {System} from "../Common/js/System"
import {Paint} from "../Common/js/Paint"
import {Ball} from "../Common/js/Ball"
import {NatrueObject} from "../Common/js/NatrueObject"
import {Util} from "../Common/js/Util"

let system:System;
let paint:Paint;
let balls:NatrueObject[] = [];
let number = 100;
let pause = false;
init();
action();


function init(){
  system = new System(<HTMLCanvasElement>document.getElementById("canvas"));
  paint = new Paint(system.canvas.getContext("2d"));
  paint.setFillStyle('rgba(192, 80, 77, 0.8)');
  // for(let i = 0;i < number ;i++){
  //   let radius:number = Util.randomNumber(10,20);
  //   let location:VectorPoint = new VectorPoint(Util.randomNumber(radius,system.width - radius),Util.randomNumber(radius,system.height - radius));
  //   //let velocity:VectorPoint = new VectorPoint(Util.randomNumber(-0.5,0.5),Util.randomNumber(-0.5,0.5));
  //   let velocity:VectorPoint = new VectorPoint(0,0);
  //   //let acceleration:VectorPoint = new VectorPoint(Util.randomNumber(-0.01,0.01),Util.randomNumber(-0.01,0.01));
  //   let acceleration:VectorPoint = new VectorPoint(0,0);
  //
  //   let ball = new Ball(location,velocity,acceleration,radius);
  //   balls.push(ball);
  // }
  let radius:number = 30;
  let location:VectorPoint = new VectorPoint(40,80);
  let velocity:VectorPoint = new VectorPoint(10,0);
  let acceleration:VectorPoint = new VectorPoint(0,0);
  let ball1 = new Ball(location,velocity,acceleration,radius);
  balls.push(ball1);
  for(let i = 0;i < number;i++){
    let location2:VectorPoint = new VectorPoint(Util.randomNumber(radius,system.width - radius),Util.randomNumber(radius,system.height - radius));
    let velocity2:VectorPoint = new VectorPoint(0,0);
    let ball2 = new Ball(location2,velocity2,acceleration,radius);
    balls.push(ball2);
  }
  system.pushObjects(balls);
  console.log(system.quadTree);
}
system.canvas.onmousedown = function(ev:MouseEvent){
    pause = !pause;
}
function action(){
  //console.log(system.quadTree);
  if(pause){
    system.clear();
    system.quadTree.refresh(null);
    //console.log(system.quadTree);
    balls[0].collisionDetection(system);
    balls[0].move();
    for(let ball of balls){
      // ball.collisionDetection(system);
      // ball.move();
      ball.display(paint);
    }
  }
  setTimeout(action,0);
}
