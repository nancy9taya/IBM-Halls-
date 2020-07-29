import { Component, OnInit, Input } from '@angular/core';
import {AuthService} from '../auth.service'
import {DrawResultService} from '../draw-result.service'
import {Router}      from '@angular/router'


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
/// @Input() data;

  public data;
  constructor(public authService:AuthService,public resultService:DrawResultService) { 
    //debugger;
    console.log("inside result")
    console.log(this.resultService.distribution);
    this.data=this.resultService.getOption();
    console.log(this.data);
  }

  ngOnInit(): void {
    // console.log(this.resultService)
  }

}
