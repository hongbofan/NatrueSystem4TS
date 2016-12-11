import {NatrueObject} from "./NatrueObject"
import {Rectangle} from "./Rectangle"
import {Ball} from "./Ball"
export class QuadTree {

    /*
  四叉树节点包含：
  - objects: 用于存储物体对象
  - nodes: 存储四个子节点
  - level: 该节点的深度，根节点的默认深度为0
  - bounds: 该节点对应的象限在屏幕上的范围，bounds是一个矩形
  */
    objects:NatrueObject[];
    nodes:QuadTree[];
    bounds:Rectangle;
    level:number;
    MAX_OBJECTS:number;
    MAX_LEVELS:number;
    constructor(bounds:Rectangle, level:number) {
        this.objects = []
        this.nodes = []
        this.level = level
        this.bounds = bounds
        this.MAX_OBJECTS = 10
        this.MAX_LEVELS = 5
    }
    refresh(root:QuadTree){
      let index = [];
      root = root || this;
      if(this.objects.length){
        for(let i = this.objects.length - 1;i >= 0;i--){
          let obj = this.objects[i];
          if(false){//死亡销毁
            //this.objects.splice(i,1);
          }else{
            index = this.getIndex(<Ball>obj);
            // 如果矩形不属于该象限，则将该矩形重新插入
            if(!this.isInner(<Ball>obj,this.bounds)){
              root.insert(<Ball>this.objects.splice(i,1)[0]);
            }
            // 如果矩形属于该象限 且 该象限具有子象限，则
            // 将该矩形安插到子象限中
            else if(this.nodes.length){
              for(let i of index){
                this.nodes[i].insert(<Ball>this.objects.splice(i, 1)[0]);
              }
            }
          }
        }
      }
      // 递归刷新子象限
      for (let node of this.nodes) {
          node.refresh(root);
      }
    }
    // 判断物体是否在象限范围内
    isInner(ball:Ball, bounds:Rectangle) {
    return ball.location.x - ball.radius >= bounds.x &&
        ball.location.x + ball.radius <= bounds.x + bounds.width &&
        ball.location.y - ball.radius >= bounds.y &&
        ball.location.y + ball.radius <= bounds.y + bounds.height;
    }
    //检索所有可能碰撞的物体
    retrieve(ball:Ball){
      let result = [];//递归加载可能碰撞的objects
      let index;//象限;
      if(this.nodes.length){//如果该节点有子节点
        index = this.getIndex(ball);
        for(let i of index){
          result = result.concat(this.nodes[i].retrieve(ball));//递归加载子节点的结果集
        }

      }
      //否则直接加到结果集里
      return result.concat(this.objects);
    }
    //插入物体
    insert(ball:Ball){
      let index;//象限

      //如果该节点已经有四个子节点
      if(this.nodes.length){
        index = this.getIndex(ball);//获取该物体的象限
        for(let i of index){
          this.nodes[i].insert(ball);//对应的象限节点插入该物体
          return;
        }
      }
      //该节点没有四个子节点，都加到该节点的objects里
      this.objects.push(ball);
      if(!this.nodes.length){//如果是该节点没有四个子节点而不是穿插在轴上的情况下
         if(this.objects.length > this.MAX_OBJECTS && this.level < this.MAX_LEVELS){//判断是否可分裂
           this.split();
           for(let i = this.objects.length - 1;i >= 0;i--){
             index  = this.getIndex(<Ball>this.objects[i]);
             for(let j of index){
               this.nodes[j].insert(<Ball>this.objects.splice(i,1)[0]);//重新分配该节点的objects。因为要删除，从后往前
             }
           }
         }
      }
    }
    //判断物体在哪个象限内
    getIndex(ball:Ball){
      let index = [];
      let verticalMidpoint = this.bounds.midX;//象限水平中点
      let horizontalMidpoint = this.bounds.midY;//象限竖直中点

      let top = (ball.location.y + ball.radius) <= horizontalMidpoint;//根据Y判断物体是否在一四象限
      let bottom = (ball.location.y - ball.radius) >= horizontalMidpoint;//根据Y判断物体是否在二三象限
      let left = (ball.location.x + ball.radius) <= verticalMidpoint;//根据X判断物体是否在三四象限
      let right = (ball.location.x - ball.radius) >= verticalMidpoint;//根据X判断物体是否在一二象限

      if(top){
        if(right){
          index.push(0);//象限1
        }
        else if(left){
          index.push(3);//象限4
        }else{
          //横跨1、4象限
          index.push(0);
          index.push(3);
        }
      }else if(bottom){
        if(right){
          index.push(1);//象限2
        }else if(left){
          index.push(2);//象限3
        }else{
          //横跨2、3象限
          index.push(1);
          index.push(2);
        }
      }else{
        if(right){
          //横跨1、2象限
          index.push(0);
          index.push(1);
        }else if(left){
          //横跨3、4象限
          index.push(2);
          index.push(3);
        }else{
          //横跨全象限
          index.push(0);
          index.push(1);
          index.push(2);
          index.push(3);
        }
      }
      return index;
    }
    //清除四叉树所有节点的所有对象
    clear(){
      this.objects = [];
      for(let node of this.nodes){
          node.clear();
      }
      this.nodes = [];
    }
    //用来将节点分成相等的四份面积，并用新的边界来初始化四个新的子节点
    split(){
      let bounds = this.bounds;
      this.nodes.push(new QuadTree(new Rectangle(bounds.midX,bounds.y,bounds.midWidth,bounds.midHeight),this.level+1));
      this.nodes.push(new QuadTree(new Rectangle(bounds.midX,bounds.midY,bounds.midWidth,bounds.midHeight),this.level+1));
      this.nodes.push(new QuadTree(new Rectangle(bounds.x,bounds.midY,bounds.midWidth,bounds.midHeight),this.level+1));
      this.nodes.push(new QuadTree(new Rectangle(bounds.x,bounds.y,bounds.midWidth,bounds.midHeight),this.level+1));
    }
}
