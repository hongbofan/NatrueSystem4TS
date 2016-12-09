export class System {
  width:number;//宽
  height:number;//高
  canvas:HTMLCanvasElement//画布
  constructor(canvas:HTMLCanvasElement){
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
  }
  clear(){
    this.canvas.getContext("2d").clearRect(0,0,this.width,this.height);
  }
}
