export class Paint{
  context2D:CanvasRenderingContext2D;

  constructor(context2D:CanvasRenderingContext2D){
    this.context2D = context2D;
  }
  //画弧
  arc(x:number, y:number, radius:number, startAngle:number, endAngle:number){
    this.context2D.arc(x,y,radius,startAngle,endAngle);
    return this;
  }
  //填充
  fill(){
    this.context2D.fill();
    return this;
  }
  //开始画画
  beginPath(){
    this.context2D.beginPath();
    return this;
  }
  //设置填充样式
  setFillStyle(fillStyle:String){
    this.context2D.fillStyle = fillStyle;
    return this;
  }
}
