import {NatrueObject} from "./NatrueObject"
import {QuadTree} from "./QuadTree"
import {Rectangle} from "./Rectangle"
import {Ball} from "./Ball"

export class System {
  width:number;//宽
  height:number;//高
  canvas:HTMLCanvasElement;//画布
  natrueObjects:NatrueObject[];//当前系统的所有物体
  quadTree:QuadTree;
  constructor(canvas:HTMLCanvasElement){
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.quadTree = new QuadTree(new Rectangle(0,0,this.width,this.height),0);
  }
  pushObjects(natrueObjects:NatrueObject[]){

    for(let natrueObject of natrueObjects){
      //console.log(natrueObject);
      this.quadTree.insert(<Ball>natrueObject);
    }
  }
  clear(){
    this.canvas.getContext('2d').clearRect(0,0,this.width,this.height);
  }
}
