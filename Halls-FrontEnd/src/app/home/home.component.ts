import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import {AppComponent} from '../app.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rForm:FormGroup;
  public titleAlert:string="This field is required";

  constructor(private http:HttpClient,private appComponent:AppComponent,private fb:FormBuilder) { 
    this.rForm=fb.group({
      'name':['',Validators.required] ,
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
        name:data.name,
        password: data.password,
    }).subscribe(data=>{
      console.log("Should be done")
    });
    return;
  }

}
