import {NatrueObject} from "./NatrueObject"
import {VectorPoint} from "./VectorPoint"
import {Paint} from "./Paint"
import {System} from "./System"

export class Ball extends NatrueObject{
    radius:number;//半径
    constructor(location:VectorPoint,velocity:VectorPoint,acceleration:VectorPoint,radius:number){
      super(location,velocity,acceleration);
      this.radius = radius;
    }
    display(paint:Paint){
      paint.beginPath().arc(this.location.x, this.location.y, this.radius, 0, 2 * Math.PI).fill();
      return this;
    }
    //系统碰撞检测
    collisionDetection(system:System){
      if(this.location.x + this.radius > system.width || this.location.x - this.radius< 0){
        this.velocity.x += this.acceleration.x;//碰撞的时候该速度只改变方向，不改变大小
        this.velocity.x *= -1;
      }
      if(this.location.y + this.radius> system.height || this.location.y - this.radius < 0){
        this.velocity.y += this.acceleration.y;//同上
        this.velocity.y *= -1;
      }
      return this;
    }
}
