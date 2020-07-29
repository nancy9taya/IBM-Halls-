import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  constructor(public _authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  guide(){
    console.log("route to guide inside guide component")
    this.router.navigate(['/guide'])
  }
  formData(){
    this.router.navigate(['/FormData'])
  }

}
