import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import{Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl="http://localhost:3000"
  private _loginUrl=this.baseUrl+"/user/login";
  private _signUpUrl=this.baseUrl+"/user/signup"
  private _verifyUrl=this.baseUrl+"/user/forgetPassword/";
  private _resetPassUrl=this.baseUrl+"/user/resetPassword";
  private _isMailExist=this.baseUrl+"/user/mailExist";
  constructor(private http:HttpClient,private _router:Router) { }


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
  forgetPassword(user){
    const url=this._verifyUrl+user.email;
    console.log(url)
    return this.http.get<any>(url)
  }
  resetPassword(user,id){
    console.log(id)
    const query={params:new HttpParams({fromString:"_id=`${id}`"})}
    return this.http.post<any>(this._resetPassUrl,{
      newPassword:user.password,
      confirmedPassword:user.Repassword
    },{params:{id:id}})
    }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    console.log("tokennnnnn   "+localStorage.getItem('token'))
    return localStorage.getItem('token');
  }
  logOut(){
    localStorage.removeItem('token');
    this._router.navigate(['']);

  }
  isMailExist(mail){
    return this.http.get<any>(this._isMailExist+"/"+mail)

  }
}
