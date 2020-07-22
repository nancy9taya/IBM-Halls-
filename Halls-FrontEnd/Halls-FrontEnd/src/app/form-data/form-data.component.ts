import { Component, OnInit,Input } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import {AuthService} from '../auth.service'


@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  public token:string;
  myForm:FormGroup;
  showhidepregnant: boolean=true;
  titleAlert:string="This field is required";
  message:string="please enter a positive number";
  constructor(private http:HttpClient,private fb:FormBuilder
    ,public _authService:AuthService ) { }

  ngOnInit(): void {
    
    this.myForm=this.fb.group({
      rowsCnt:['',Validators.required],
      colsCnt:['',Validators.required],
      lenChair:['',Validators.required],
      widChair:['',Validators.required],
      isBench:['',Validators.required],
      isGap:['',Validators.required]
    })
    this.myForm.valueChanges.subscribe(console.log);

  }
    
  submit(data):void{
    console.log(data)
    console.log("HERREEEEEEEEE")
    this.http.get<any>('http://localhost:3000/FormData')
    .subscribe(data=>{
      console.log("Response\n"+data.message+"\n"+data.token);
      console.log("Should be done")
    },
    err=>console.log(err));
    return;
  }
  

}
