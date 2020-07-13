import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {
  public token :string="";
  // constructor(token:string) { 
  //   this.token="Bearer "+token;
  // }
  // setToken(token:string){
  //   this.token="Bearer "+token;
  // }

  // getToken(){
  //   return this.token;
  // }
}
