import {System} from "../Common/js/System"
import {Paint} from "../Common/js/Paint"
import {Ball} from "../Common/js/Ball"
import {NatrueObject} from "../Common/js/NatrueObject"
import {Rectangle} from "../Common/js/Rectangle"
import {BallFactory} from "../Common/js/BallFactory"

let system: System;
let paint: Paint;
let balls: NatrueObject[] = [];
let number = 100;
let pause = false;
init();
action();


function init() {
    system = new System(<HTMLCanvasElement>document.getElementById("canvas"));
    paint = new Paint(system.canvas.getContext("2d"));
    balls = new BallFactory()
        .makeBalls(number)
        .randomRadius(10, 20)
        .randomLocation(new Rectangle(0, 0, system.width, system.height))
        .randomVelocity(-0.5, 0.5, -0.5, 0.5)
        .randomAcceleration(-0.01, 0.01, -0.01, 0.01)
        .randomMass(10, 20)
        .randomHP(1, 1)
        .randomStyle()
        .balls
    system.pushObjects(balls);
    console.log(system.quadTree);
}
system.canvas.onmousedown = function(ev: MouseEvent) {
    pause = !pause;
}
function action() {
    if (pause) {
        system.clear();
        clearDestroy();
        system.quadTree.refresh(null);
        for (let ball of balls) {
            ball.collisionDetection(system);
        }
        for (let ball of balls){
          ball.move();
          ball.display(paint);
        }
    }
    if (balls.length > 0) {
        setTimeout(action, 1);
    }
}
function clearDestroy() {
    for (let i = balls.length - 1; i >= 0; i--) {
        if(balls[i].HP <= 0){
          balls[i].destroy = true;
        }
        if (balls[i].destroy) {
            balls.splice(i, 1);
        }
    }
}
