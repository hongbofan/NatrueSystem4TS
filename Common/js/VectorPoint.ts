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
  //向量加法
  add(p:VectorPoint){
    this.x += p.x;
    this.y += p.y;
    return this;
  }
  //向量减法
  sub(p:VectorPoint){
    this.x -= p.x;
    this.y -= p.y;
  }
  //乘以标量延伸向量
  mult(n:number){
    this.x *=n;
    this.y *=n;
  }
  //除以标量延伸向量
  div(n:number){
    if(n != 0){
      this.x /=n;
      this.y /=n;
    }
  }
  //计算向量的长度
  mag(){

  }
  //设置向量的长度
  setMag(){

  }
  //使其长度为1
  normalize(){

  }
  //限制向量的长度
  limit(){

  }
  //计算向量的方向，用角度表示
  heading2D(){

  }
  //旋转一个二维向量
  rotate(){

  }
  //线性插值到另一个向量
  lerp(){

  }
  //计算两个向量的欧几里得距离
  dist(){

  }
  //计算两个向量的夹角
  angleBetween(){

  }
  //计算两个向量的点乘
  dot(){

  }
  //计算两个向量的叉乘
  cross(){

  }
  //随机返回一个二维向量
  random2D(){

  }
  //随机返回一个三维向量
  random3D(){

  }
}
