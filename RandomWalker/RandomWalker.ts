import {VectorPoint} from "../Common/js/VectorPoint";

var canvas = <HTMLCanvasElement>document.getElementById("canvas")
var ctx = canvas.getContext("2d");
ctx.fillStyle = 'rgba(192, 80, 77, 0.1)';

var point: VectorPoint = new VectorPoint(canvas.width/2,canvas.height/2);

function walk(){
  point.move(new VectorPoint((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20));
  point.display(ctx);
  setTimeout(walk, 0);
}
walk();
