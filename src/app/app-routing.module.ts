import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [ 
  {
  path:'',
  component: LandingPageComponent
},

{
path: 'signup',
component:SignupComponent,
},
{
path: 'login',
component: LoginComponent,
},
{
path:'dashboard/:username',
component: DashboardComponent,
children:[
  {
    path: 'about',
    component:AboutUsComponent,
  },
  {
    path: 'contact',
    component: ContactUsComponent,
  },
  // {
//     path:'**',
//     // component: DashboardComponent,
//     redirectTo: '/dashboard'
//   }
]
},
{
path:'**',
component: PageNotFoundComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
