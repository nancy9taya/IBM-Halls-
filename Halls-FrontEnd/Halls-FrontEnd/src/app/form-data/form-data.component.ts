import { Component, OnInit,Input } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import {AuthService} from '../auth.service'
import {Router}      from '@angular/router'
import {numValidator} from './validators'
import {AbstractControl} from '@angular/forms'
import {DrawResultService} from '../draw-result.service'



@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  public token:string;
  myForm:FormGroup;
  titleAlert:string="This field is required and should be a positive number";
  gapsAlert:string="The sum of numbers should be equal to rows count and all numbers should be positive"
  message:string="please enter a positive number";
  isBench:boolean=false;
  isGap:boolean=false;
  widBench:number;
  numGap:string;
  gapCols:string;
  gapWid:string="0";
  validBench:boolean=true;
  validGap:boolean=true;
  validColsGap:boolean=true;
  validGapWid:boolean=true;
  rowsCnt:number;
  colsCnt:number;
  numGaps=[];
  constructor(private http:HttpClient,private fb:FormBuilder
    ,public _authService:AuthService ,private router:Router,public _resultService:DrawResultService) {

    


  }

  ngOnInit(): void {
    
    this.myForm=this.fb.group({
      rowsCnt:['',[Validators.required,numValidator]],
      colsCnt:['',[Validators.required,numValidator]],
      lenChair:['',[Validators.required,numValidator]],
      widChair:['',[Validators.required,numValidator]],
      benchRadio:['',[Validators.required]],
      gapRadio:['',[Validators.required]],
      isBenchClicked:[''],
      isGapClicked:[''],
      isGapColsClicked:[''],
      isGapWidClicked:['']

    })
   

  }
    
  submit(data):void{
    console.log("data")
    console.log(data)
    let benchWid=0;
    if(data.isBenchClicked!==""){
      benchWid=parseInt(data.isBenchClicked)
    }
    const formData={
      rows:parseInt(data.rowsCnt),
      columns:parseInt(data.colsCnt),
      chairLength:parseInt(data.lenChair),
      chairWidth:parseInt(data.widChair),
      isBench:parseInt(data.benchRadio),
      benchesWidth:benchWid,
      isGap:parseInt(data.gapRadio),
      columnsThenGap:this.numGaps,
      gapwidth:parseInt(this.gapWid),
      noGaps:parseInt(this.numGap)
    }
    console.log("formData")
    console.log(formData)
    
    this._resultService.chairLength=parseInt(data.lenChair);
    this._resultService.setOption('chairLength',parseInt(data.lenChair));
    this._resultService.setOption('chairWidth',parseInt(data.widChair));
    this._resultService.setOption('isBench',parseInt(data.benchRadio));
    this._resultService.setOption('rows',parseInt(data.rowsCnt));
    this._resultService.setOption('columns',parseInt(data.colsCnt));
    this._resultService.setOption('isGap',parseInt(data.gapRadio));
    this._resultService.setOption('columnsThenGap',this.numGaps);
    this._resultService.setOption('gapWidth',parseInt(this.gapWid));
    this._resultService.setOption('noGaps',parseInt(this.numGap));

   
    this.http.post<any>(this._authService.baseUrl+"/hall/sendData",formData).subscribe(res=>{
      if(res.Array){
        console.log("disttttttttttttttttttttttttttt")
        console.log(res.Array)
        this._resultService.setOption('distribution',res.Array);
        this._resultService.distribution=res.Array;
        console.log(this._resultService.getOption())
      }
      this.router.navigate(['/result']);

    },err=>{

    });
  }

  check(value){
 
    if(value=="1"){
      this.isBench=true;
      this.checkValue();
    }
    else{
      this.isBench=false;
      this.validBench=true;
    }

  }
  checkValue(){
    if(this.widBench>=1){
      this.validBench=true;
    }
    else{
      this.validBench=false;
    }
  }

  checkGap(value){
    if(value=="1"){
      this.isGap=true;
      this.checkValueGap();
      this.checkColsGap();
      this.checkgapWid();
    }
    else{
      this.isGap=false;
      this.validGap=true;
      this.validColsGap=true;
      this.validGapWid=true;
    }
  }
  checkColsGap(){
    if(this.gapCols){
      let gaps=this.gapCols.split(",");
      // console.log("gaps")
      const num=this.numGap+1;
      // console.log(this.numGap)
      // console.log(gaps.length-1)
      if(gaps.length-1==parseInt(this.numGap))
      {
        console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT")
        var sum=0;
      //check sum to be equal number of rows
        for(var i=0;i<gaps.length;i++){
          if(parseInt(gaps[i])>0){
          sum=sum+parseInt(gaps[i]);
          this.numGaps[i]=sum;//gaps[i];
          }
          else{
            this.validColsGap=false;
            return;
          }
        }
        // console.log(sum)
        // console.log()
        if(sum==this.colsCnt)
          this.validColsGap=true;
        else
          this.validColsGap=false;
      }
      else
        this.validColsGap=false;
    }
    else
      this.validColsGap=false;
      console.log("YYYYYYYYYYYYYYYYYYYYYYYYYY")
     console.log(this.validColsGap)

  }
  checkValueGap(){
    if(parseInt(this.numGap)>=1){
      this.validGap=true;
      this.checkColsGap();
    }
    else{
      this.validGap=false;
    }

  }
  checkgapWid(){
    if(parseInt(this.gapWid)>=1){
      this.validGapWid=true;
    }
    else
      this.validGapWid=false;

  }
  guide(){
    console.log("route to guide inside form data component")
    this.router.navigate(['/guide'])
  }
  formData(){
    this.router.navigate(['/FormData'])
  }
  

}
