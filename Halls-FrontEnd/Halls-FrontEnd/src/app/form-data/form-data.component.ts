import { Component, OnInit,Input } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import {AuthService} from '../auth.service'
import {Router}      from '@angular/router'
import {numValidator} from './validators'
import {AbstractControl} from '@angular/forms'



@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  public token:string;
  myForm:FormGroup;
  titleAlert:string="This field is required and should be a positive number";
  gapsAlert:String="The sum of numbers should be equal to rows count and all numbers should be positive"
  message:string="please enter a positive number";
  isBench:boolean=false;
  isGap:boolean=false;
  widBench:number;
  numGap:number;
  gapCols:String;
  gapWid:number=0;
  validBench:boolean=true;
  validGap:boolean=true;
  validColsGap:boolean=true;
  validGapWid:boolean=true;
  rowsCnt:number;
  numGaps=[];
  constructor(private http:HttpClient,private fb:FormBuilder
    ,public _authService:AuthService ,private router:Router) { }

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
    // this.myForm.valueChanges.subscribe(console.log);

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
      isGap:parseInt(data.benchRadio),
      columnsThenGap:this.numGaps,
      gapWidth:this.gapWid
    }
    console.log("formData")
    console.log(formData)
    this.http.post<any>(this._authService.baseUrl+"/hall/sendData",formData).subscribe(res=>{
      if(res.message=="Done")
      {
        
      }

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
      if(gaps.length-1==this.numGap)
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
        if(sum==this.rowsCnt)
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
    if(this.numGap>=1){
      this.validGap=true;
      this.checkColsGap();
    }
    else{
      this.validGap=false;
    }

  }
  checkgapWid(){
    if(this.gapWid>=1){
      this.validGapWid=true;
    }
    else
      this.validGapWid=false;

  }
  

}
