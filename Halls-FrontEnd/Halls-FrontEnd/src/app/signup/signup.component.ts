import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppComponent} from '../app.component'
import {FormBuilder,FormGroup,Validators, AbstractControl} from '@angular/forms'
import {cnfPassValidator,emailValidator, passValidator} from './validator'
import {AuthService} from '../auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name:string='';
  email:string;
  password:string="";
  Repassword:string="";
  signUpUrl:string="";
  MailExist:boolean=false;
  rForm:FormGroup;
  titleAlert:string="This field is required";
  passAlert:string="Password should has minuimum 8 characters";
  cnfPassAlert:string="The passwords don't match";

  constructor(private http:HttpClient,private appComponent:AppComponent
    ,private fb:FormBuilder,private _auth:AuthService,private router:Router) {
    this.rForm=fb.group({
      'name':['',Validators.required] ,
      'email':['',emailValidator],
      'password':['',passValidator] ,
      'Repassword':[null,cnfPassValidator] 
     })
    

  }

  ngOnInit(): void {
  }

  SignUp(data){
    this._auth.SignUp(data).subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        this.router.navigate(['/FormData'])
      },
      err=>{}
    )
    return;
  }

  isMailExist(){
    if(this.email!=undefined&&this.email!=null){
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const isMatched=this.email.match(regex);
      // console.log("isMatched"+isMatched)
      if(isMatched!=null){
        console.log("Request Sent Mail Exist")
        this._auth.isMailExist(this.email).subscribe(res=>{
          console.log("IN RESPONSEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE")
          console.log(res)
          if(res.message==="success"){
            this.MailExist=false;
            console.log(this.MailExist)
          }
        },
        err=>{
          if(err.status===409){
          this.MailExist=true;
          console.log(this.MailExist)
          }

        })
      }
    }
  }
  
}

