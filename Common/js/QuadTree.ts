import {NatrueObject} from "./NatrueObject"
import {Rectangle} from "./Rectangle"
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
}
