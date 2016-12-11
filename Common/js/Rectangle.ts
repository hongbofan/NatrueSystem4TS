export class Rectangle {
  x:number;//左上x
  y:number;//左上y
  midX:number;
  midY:number;
  width:number;
  height:number;
  midWidth:number;
  midHeight:number;
  constructor(x:number,y:number,width:number,height:number){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.midWidth = this.width / 2;
    this.midHeight = this.height / 2;
    this.midX = x + this.midWidth;
    this.midY = y + this.midHeight;
  }
}
