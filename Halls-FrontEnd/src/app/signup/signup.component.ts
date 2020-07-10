import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppComponent} from '../app.component'
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import {passValidator,emailValidator} from './validator'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name:string="";
  email:string="";
  password:string="";
  Repassword:string="";
  signUpUrl:string="";
  rForm:FormGroup;
  titleAlert:string="This field is required";
  passAlert:string="Password should has minuimum 8 characters";
  cnfPassAlert:string="The passwords don't match";

  constructor(private http:HttpClient,private appComponent:AppComponent,private fb:FormBuilder) {
    this.rForm=fb.group({
      'name':[null,Validators.required] ,
      'email':[null,emailValidator] ,
      'password':[null,Validators.minLength(8)] ,
      'Repassword':[null,passValidator] ,
     })
     this.signUpUrl=this.appComponent.url;

  }


  ngOnInit(): void {
  }
  //make the request
  SignUp(data){
    console.log("Front SignUp "+this.signUpUrl)
    this.http.post<any>(this.signUpUrl+'user/signup',{
        name:"Yasser",
        email: "Salahfahaly131@gmail.com",
        password: "FG6Gbhhjv",
        birthDate:"2000-07-05",
        gender:"false",
        type:"free"
    }).subscribe(data=>{
      console.log("Should be done")
    });
    return;
  }
  getName(item){
    console.log(item.target.value)
  }
  
}

