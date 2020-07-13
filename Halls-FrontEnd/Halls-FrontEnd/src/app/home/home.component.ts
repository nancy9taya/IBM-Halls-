import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import {AppComponent} from '../app.component'
import {Router}      from '@angular/router'
import { TokenServiceService } from '../token-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rForm:FormGroup;
  public titleAlert:string="This field is required";
  @Output() getToken=new EventEmitter<string>();
  @Output() isLogged=new EventEmitter<boolean>();
  public loggedIn:boolean=false;
  public token:string="";
  
  constructor(private _token:TokenServiceService,private http:HttpClient,private appComponent:AppComponent,private fb:FormBuilder,private router:Router) { 
    this.rForm=fb.group({
      'email':['',Validators.required] ,
      'password':['',Validators.required]
     })
  }

  ngOnInit(): void {
    var left = document.querySelector(".left");
    var right = document.querySelector(".right");
    var container = document.querySelector(".container");
    left.addEventListener("mouseenter", function () {
        console.log("LeftMouseEnter");
        container.classList.add("hover-left");
    });
    left.addEventListener("mouseleave", function () {
        console.log("LeftMouseEnter");
        container.classList.remove("hover-left");
    });
    right.addEventListener("mouseenter", function () {
        console.log("RightMouseEnter");
        container.classList.add("hover-right");
    });
    right.addEventListener("mouseleave", function () {
        console.log("RightMouseLeave");
        container.classList.remove("hover-right");
    });

  }

  SignIn(data){
    console.log("Sign In")
    console.log(data)
    console.log("Front SignIn "+this.appComponent.url)
    this.http.post<any>(this.appComponent.url+'user/login',{
        email:data.email,
        password: data.password,
    }).subscribe(data=>{
      console.log("Response\n" +data.message+"\n"+data.token)
      console.log("Should be done")
     
      // this.token="Bearer "+data.token;
      // this.loggedIn=true;
      this._token.token="Bearer "+data.token;
      // this.getToken.emit(this.token);
      this.router.navigate(['FormData']);
      // this.isLogged.emit(this.loggedIn);
      // TokenServiceService.setToken(data.token);
    });
    return;
  }

}
