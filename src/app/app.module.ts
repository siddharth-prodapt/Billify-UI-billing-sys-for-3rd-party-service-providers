import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsAngularComponent } from './forms-angular/forms-angular.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavUnAuthComponent } from './nav-un-auth/nav-un-auth.component';
import { NavAuthComponent } from './nav-auth/nav-auth.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { MyPlansComponent } from './dashboard/my-plans/my-plans.component';
import { MyBillsComponent } from './dashboard/my-bills/my-bills.component';
import { AddMemberComponent } from './dashboard/add-member/add-member.component';


@NgModule({
  declarations: [
    AppComponent,
    FormsAngularComponent,
    SignupComponent,
    LoginComponent,
    DefaultComponent,
    DashboardComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    LandingPageComponent,
    NavUnAuthComponent,
    NavAuthComponent,
    SidebarComponent,
    MyPlansComponent,
    MyBillsComponent,
    AddMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
