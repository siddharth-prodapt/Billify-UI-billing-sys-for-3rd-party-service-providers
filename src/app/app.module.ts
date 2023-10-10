import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Customer/components/signup/signup.component';
import { LoginComponent } from './Customer/components/login/login.component';
import { DashboardComponent } from './Customer/components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './Customer/SharedComponents/page-not-found/page-not-found.component';
import { AboutUsComponent } from './Customer/components/about-us/about-us.component';
import { ContactUsComponent } from './Customer/components/contact-us/contact-us.component';
import { LandingPageComponent } from './Customer/components/landing-page/landing-page.component';
import { NavUnAuthComponent } from './Customer/SharedComponents/nav-un-auth/nav-un-auth.component';
import { NavAuthComponent } from './Customer/SharedComponents/nav-auth/nav-auth.component';
import { MyPlansComponent } from './Customer/components/dashboard/my-plans/my-plans.component';
import { MyBillsComponent } from './Customer/components/dashboard/my-bills/my-bills.component';
import { AddMemberComponent } from './Customer/components/dashboard/add-member/add-member.component';
import { ShowBillComponent } from './Customer/components/dashboard/show-bill/show-bill.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewMembersComponent } from './Customer/components/dashboard/view-members/view-members.component';
import { AllPlansComponent } from './Customer/components/dashboard/all-plans/all-plans.component';
import { ShowPlansComponent } from './Customer/SharedComponents/show-plans/show-plans.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    ContactUsComponent,
    LandingPageComponent,
    NavUnAuthComponent,
    NavAuthComponent,
    MyPlansComponent,
    MyBillsComponent,
    AddMemberComponent,
    ShowBillComponent,
    ViewMembersComponent,
    AllPlansComponent,
    ShowPlansComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
