import {NatrueObject} from "./NatrueObject"
export class System {
  width:number;//宽
  height:number;//高
  canvas:HTMLCanvasElement;//画布
  natrueObjects:NatrueObject[];//当前系统的所有物体
  constructor(canvas:HTMLCanvasElement){
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
  }
  pushObjects(natrueObjects:NatrueObject[]){
    for(let natrueObject of natrueObjects){
      this.natrueObjects.push(natrueObject);
    }
  }
  clear(){
    this.canvas.getContext("2d").clearRect(0,0,this.width,this.height);
  }
}
