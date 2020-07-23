import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import {Router}      from '@angular/router'


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

}
