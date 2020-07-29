import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {AppComponent} from '../app.component'
import {Router}      from '@angular/router'
import {AuthService} from '../auth.service'

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
  isValidPass:boolean=true; 
  isValidMail:boolean=true;
  showPassword:boolean=false;
  
  constructor(private _auth:AuthService,private http:HttpClient,private appComponent:AppComponent,private fb:FormBuilder,private router:Router) { 
    this.rForm=fb.group({
      'email':['',Validators.required] ,
      'password':['',Validators.required],
      'rememberMe':['']
     })
  }

  ngOnInit(): void {

  }
  focusIn(event: FocusEvent) {
    console.log(event.detail);
    this.isValidPass=true;
  }
  focusInEmail(event: FocusEvent) {
    console.log(event.detail);
    this.isValidMail=true;
  }

  SignIn(data){
    const user={
      email:data.email,
      password:data.password
    }
    console.log("log in request sent")
    this._auth.loginUser(user).subscribe(
      res=>{
        console.log(res)
        localStorage.setItem('token',res.token)
        this.router.navigate(['/FormData'])
      },
      err=>{
      if(err instanceof HttpErrorResponse){
        if(err.status===401){
          this.isValidPass=false;        
        }
        else if(err.status===402){
          this.isValidMail=false;
        }
      }
    
  })

}
}
