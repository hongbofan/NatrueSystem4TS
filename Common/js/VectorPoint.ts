import {Paint} from "./Paint";
export class VectorPoint {
  x:number;//横坐标
  y:number;//纵坐标
  constructor(x:number, y:number){
    this.x = x;
    this.y = y;
  }
  //画自身
  display(paint:Paint){
    paint.beginPath().arc(this.x, this.y, 10, 0, 2 * Math.PI).fill();
  }
  //移动
  move(p: VectorPoint) {
    this.x += p.x;
    this.y += p.y;
    return this;
  }
}
