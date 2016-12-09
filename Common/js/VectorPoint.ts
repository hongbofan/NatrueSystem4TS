export class VectorPoint {
  x:number;//横坐标
  y:number;//纵坐标
  constructor(x:number, y:number){
    this.x = x;
    this.y = y;
  }

  display(context2D:CanvasRenderingContext2D){
    context2D.beginPath();
    context2D.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    context2D.fill();
  }
  move(p: VectorPoint) {
    this.x += p.x;
    this.y += p.y;
    return this;
  }
}
