import { Component, OnInit,Input } from '@angular/core';
import { TokenServiceService } from '../token-service.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  public token:string;
  // public isLogged;
  constructor(private _token:TokenServiceService ) { }

  ngOnInit(): void {
    this.token=this._token.token;
   
    // this.token=this._token.getToken();
  }
  

}
