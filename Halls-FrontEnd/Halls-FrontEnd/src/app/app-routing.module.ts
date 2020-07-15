import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import {FormDataComponent} from './form-data/form-data.component'
import {AuthGuard} from './auth.guard'

const routes: Routes = [{path:'signup',component:SignupComponent},
                        {path:'',component:HomeComponent,},
                        {path:'FormData',component:FormDataComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SignupComponent,HomeComponent]
