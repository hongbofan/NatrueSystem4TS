export class Util{



  public static randomNumber(start:number,end:number){
      let random = Math.random() * (end-start) + start;
      return random;
  }
}
