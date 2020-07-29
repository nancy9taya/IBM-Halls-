import { Injectable } from '@angular/core';

@Injectable()
export class DrawResultService {
  


  public rows:number;
  public columns:number;
  public chairLength:number;
  public chairWidth:number;
  public isBench:number;
  public benchesWidth:number;
  public isGap:number;
  public columnsThenGap;
  public gapWidth:number;
  public distribution
  public noGaps:number
  public data={};
  constructor(){}

  setOption(option,value){
    this.data[option]=value;
  }

  getOption(){
    return this.data;
  }

}
