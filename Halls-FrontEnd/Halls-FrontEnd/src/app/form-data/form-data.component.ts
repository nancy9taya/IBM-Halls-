import { Component, OnInit,Input } from '@angular/core';
import { TokenServiceService } from '../token-service.service';
import {FormBuilder,FormGroup, Validators} from '@angular/forms'

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
  // public isLogged;
  constructor(private fb:FormBuilder,private _token:TokenServiceService ) { }

  ngOnInit(): void {
    this.token=this._token.token;
    this.myForm=this.fb.group({
      rowsCnt:['',Validators.required],
      colsCnt:['',Validators.required],
      lenChair:['',Validators.required],
      widChair:['',Validators.required],
      isBench:['',Validators.required]
    })
    this.myForm.valueChanges.subscribe(console.log);

  }
    
  submit(data):void{
    console.log("HERREEEEEEEEE")
  }
  

}
