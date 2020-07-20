import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
import {passValidator,cnfPassValidator} from '../signup/validator'
import {AuthService} from '../auth.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.css']
})
export class ResetpassComponent implements OnInit {
  successReset:boolean =false;
  failedReset:boolean=false;
  rForm:FormGroup;
  private id:string;
  constructor(private fb:FormBuilder,private _auth:AuthService,private route:ActivatedRoute) {
    this.rForm=fb.group({
      'password':['',passValidator] ,
      'Repassword':[null,cnfPassValidator] 
     })
   }

  ngOnInit(): void {
    this.id=this.route.snapshot.queryParamMap.get('id')
    console.log(this.id)
  }

  Submit(data){
    console.log(this.id);
    this._auth.resetPassword(data,this.id).subscribe(
      res=>{
        console.log("Responseeeeeeeeee")
        if(res.message==="You reset password successfly")
        {
          console.log("Success Reset")
          this.successReset=true;
          localStorage.setItem('token',res.token)
        }
      },
      err=>{
        this.failedReset=true;
      }
    )
    console.log(data);
  }

}
