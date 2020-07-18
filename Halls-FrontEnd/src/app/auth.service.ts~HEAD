import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl="http://localhost:3000/user/login";
  private _signUpUrl="http://localhost:3000/user/signup"
  constructor(private http:HttpClient) { }


  loginUser(user){
    return this.http.post<any>(this._loginUrl,user)
  }
  SignUp(user){
    return this.http.post<any>(this._signUpUrl,{
        name:user.name,
        email:user.email,
        password: user.password,
        birthDate:"2000-07-05",
        gender:"false",
        type:"free"})
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    console.log("tokennnnnn   "+localStorage.getItem('token'))
    return localStorage.getItem('token');
  }
}
