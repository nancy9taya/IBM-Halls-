import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from '../auth.service'
import {DrawResultService} from '../draw-result.service'
import {Router}      from '@angular/router'


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
/// @Input() data;

  public data;
  public distribution;
  public columns
  public gapsArray
  public coulmnsThenGap:[]
  public c:number;
  public r:number;
  public noGaps:number;
  public isGap:number;
  public isBenche:number;
  public numbersColumns;
  public numbersRows;
  constructor(public authService:AuthService,public resultService:DrawResultService,public router:Router) { 
    //debugger;
    this.columns=[]
    this.gapsArray=[]
    console.log("inside result")
    console.log(this.resultService.distribution);
    this.data=this.resultService.getOption();
    console.log("NANCYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY")
    console.log(this.data);
    this.distribution =this.data.distribution;
    this.c=this.data.columns;
    this.r=this.data.rows;
    this.noGaps= this.data.noGaps;
    this.coulmnsThenGap=this.data.columnsThenGap;
    this.isGap =this.data.isGap;
    this.isBenche = this.data.isBench;
    let i = 0;
    let j =0;
   //this.counter = Array(9 ).fill(0).map((x,i)=>i);
   if(this.isGap == 1){
     this.numbersColumns = Array(this.c + this.noGaps).fill(0).map((x,i)=>i);
   }
   else{
     this.numbersColumns = Array(this.c).fill(0).map((x,i)=>i);
   }
   this.numbersRows = Array(this.r).fill(0).map((x,i)=>i);
   let myCounter =0
   console.log("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN")
   console.log(this.noGaps)
   console.log(this.c)
   while( i< (this.c + this.noGaps)){  
     if((i+1) == ( this.coulmnsThenGap[myCounter]+myCounter+1 ) && this.isGap == 1){
       this.columns.push("Gap"+ (myCounter+1));
       myCounter++;
     }
     else{
       this.columns.push("column"+(i+1-myCounter));
     }
     i++;
    }
    while(j < this.noGaps){
     this.gapsArray.push( this.coulmnsThenGap[j]+ j );
     j++;
     
    }
  }
  ngOnInit(): void {
    // console.log(this.resultService)
  }
  guide(){
    this.router.navigate(['/guide'])
  }
  formData(){
    this.router.navigate(['/FormData'])
  }

}
