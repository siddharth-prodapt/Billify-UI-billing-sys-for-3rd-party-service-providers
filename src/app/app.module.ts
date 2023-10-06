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
import { SidebarComponent } from './Customer/components/dashboard/sidebar/sidebar.component';
import { MyPlansComponent } from './Customer/components/dashboard/my-plans/my-plans.component';
import { MyBillsComponent } from './Customer/components/dashboard/my-bills/my-bills.component';
import { AddMemberComponent } from './Customer/components/dashboard/add-member/add-member.component';
import { ShowBillComponent } from './Customer/components/dashboard/show-bill/show-bill.component';
import { HttpClientModule } from '@angular/common/http';


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
    SidebarComponent,
    MyPlansComponent,
    MyBillsComponent,
    AddMemberComponent,
    ShowBillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
