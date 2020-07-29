import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormDataComponent } from './form-data/form-data.component'
import {AuthService} from './auth.service'
import {DrawResultService} from './draw-result.service'
import {MaterialModule} from './material/material.module'
import {AuthGuard} from './auth.guard'
import {TokenInterceptorService} from './token-interceptor.service';
import { ForgetPassComponent } from './forgetpass/forgetpass.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { ResultComponent } from './result/result.component'
import {HashLocationStrategy,LocationStrategy} from '@angular/common';
import { GuideComponent } from './guide/guide.component'

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SignupComponent,
    HomeComponent,
    FormDataComponent,
    ForgetPassComponent,
    ResetpassComponent,
    ResultComponent,
    GuideComponent,
    // TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    // MatFormField,
    MatFormFieldModule,
    MatInputModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    DrawResultService,
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    },
    {provide:LocationStrategy,useClass:HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
