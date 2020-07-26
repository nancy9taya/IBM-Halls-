import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import {AuthService} from './auth.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private _authService:AuthService,
              private _router:Router){

  }
  canActivate() :boolean{
    if(this._authService.loggedIn()){
      return true
    }
    else{
      this._router.navigate([''])
      return false

    }
  }
 
}
