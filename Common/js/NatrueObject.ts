import {VectorPoint} from "./VectorPoint"
import {System} from "./System"
import {Paint} from "./Paint"

export class NatrueObject {
    location: VectorPoint;//坐标向量
    velocity: VectorPoint;//速度向量
    acceleration: VectorPoint;//加速度向量
    destroy: boolean;//死亡标志
    HP: number;
    constructor(location: VectorPoint, velocity: VectorPoint, acceleration: VectorPoint) {
        this.location = location;
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.destroy = false;
    }
    isDestroy() {
        return this.destroy;
    }
    //画自身
    display(paint: Paint) {
        return this;
    }
    //在加速度作用下的下一帧位置与速度向量加法
    move() {
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        return this;
    }
    //系统碰撞检测
    collisionDetection(system: System) {
        if (this.location.x > system.width || this.location.x < 0) {
            this.velocity.x += this.acceleration.x;//碰撞的时候该速度只改变方向，不改变大小
            this.velocity.x *= -1;
        }
        if (this.location.y > system.height || this.location.y < 0) {
            this.velocity.y += this.acceleration.y;//同上
            this.velocity.y *= -1;
        }
        return this;
    }
}
