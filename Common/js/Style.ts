export class Style {
  r:number;
  g:number;
  b:number;
  a:number;
  constructor(r:number,g:number,b:number,a:number){
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  getRGBA(){
    return 'rgba('+this.r+','+this.g+','+this.b+','+this.a+')';
  }
}
