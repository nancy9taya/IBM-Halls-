import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  // MatMenuModule,
  MatToolbarModule
} from '@angular/material/toolbar';
const MaterialComponents=[
  // MatMenuModule,
  MatToolbarModule
]


@NgModule({
  
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
