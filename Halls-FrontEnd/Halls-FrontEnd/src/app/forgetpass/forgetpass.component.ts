import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import {emailValidator} from '../signup/validator'
import {AuthService} from '../auth.service'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetPassComponent implements OnInit {

  rForm:FormGroup
  isValidEmail:boolean=true;
  mailSent:boolean=false;
  constructor(private fb:FormBuilder,private _auth:AuthService) { 
    this.rForm=fb.group({
      'email':['',emailValidator] ,
     })
  }

  ngOnInit(): void {
  }
  focusIn(event: FocusEvent) {
    this.isValidEmail=true;
  }

  Submit(data){
    this._auth.forgetPassword(data).subscribe(
      res=>{
        this.mailSent=true;
      },
      err=>{
      if(err instanceof HttpErrorResponse){
        if(err.status===401){
          this.isValidEmail=false;
        }
      }
    
  })
}

}
