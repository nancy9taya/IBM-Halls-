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
  showhidepregnant: boolean=true;
  titleAlert:string="This field is required and should be a positive number";
  message:string="please enter a positive number";
  isBench:boolean=false;
  isGap:boolean=false;
  widBench:number;
  numGap:number;
  validBench:boolean=true;
  validGap:boolean=true;
  constructor(private http:HttpClient,private fb:FormBuilder
    ,public _authService:AuthService ,private router:Router) { }

  ngOnInit(): void {
    
    this.myForm=this.fb.group({
      rowsCnt:['',[Validators.required,numValidator]],
      colsCnt:['',[Validators.required,numValidator]],
      lenChair:['',[Validators.required,numValidator]],
      widChair:['',[Validators.required,numValidator]],
      benchRadio:['',[Validators.required,numValidator]],
      gapRadio:['',[Validators.required,numValidator]],
      isBenchClicked:[''],
      isGapClicked:[''],
    })
    this.myForm.valueChanges.subscribe(console.log);

  }
    
  submit(data):void{
    console.log(data)
    this.http.get<any>(this._authService.baseUrl+'/FormData')
    .subscribe(data=>{
      console.log("Response\n"+data.message+"\n"+data.token);
      console.log("Should be done")
      this.router.navigate(['/result'])

    },
    err=>console.log(err));
    return;
  }

  check(value){
 
    if(value=="yes"){
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
    if(value=="yes"){
      this.isGap=true;
      this.checkValueGap();
    }
    else{
      this.isGap=false;
      this.validGap=true;
    }
  }
  checkValueGap(){
    if(this.numGap>=1){
      this.validGap=true;
    }
    else{
      this.validGap=false;
    }

  }
  

}
