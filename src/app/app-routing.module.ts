import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './Customer/components/signup/signup.component';
import { LoginComponent } from './Customer/components/login/login.component';
import { DashboardComponent } from './Customer/components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './Customer/SharedComponents/page-not-found/page-not-found.component';
import { AboutUsComponent } from './Customer/components/about-us/about-us.component';
import { ContactUsComponent } from './Customer/components/contact-us/contact-us.component';
import { LandingPageComponent } from './Customer/components/landing-page/landing-page.component';
import { MyPlansComponent } from './Customer/components/dashboard/my-plans/my-plans.component';
import { MyBillsComponent } from './Customer/components/dashboard/my-bills/my-bills.component';
import { AddMemberComponent } from './Customer/components/dashboard/add-member/add-member.component';
import { ShowBillComponent } from './Customer/components/dashboard/show-bill/show-bill.component';
import { ViewMembersComponent } from './Customer/components/dashboard/view-members/view-members.component';
import { AllPlansComponent } from './Customer/components/dashboard/all-plans/all-plans.component';
import { ProfileComponent } from './Customer/components/dashboard/profile/profile.component';
import { LoginGuard } from './config/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component:LandingPageComponent
  },
  {
    path: 'home',
    component: LandingPageComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard/:username',
    component: DashboardComponent,
    canActivate:[LoginGuard],
    children: [
      {
        path: '',
        component: MyPlansComponent
      },
      {
        path: 'allPlans',
        component:AllPlansComponent
      },
      {
        path: 'myPlans',
        component: MyPlansComponent
      },
      {
        path: 'myBills',
        component: MyBillsComponent
      },
      {
        path:'showBills/:bid',
        component:ShowBillComponent
      },
      {
        path: 'addMember',
        component: AddMemberComponent
      },
      {
        path: 'viewMember/:name',
        component: ViewMembersComponent
      },
      {
        path: 'myProfile',
        component: ProfileComponent
      },
      // {
      //     path:'**',
      //     // component: DashboardComponent,
      //     redirectTo: '/dashboard'
      //   }
    ]
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent
  },
  {
    path: 'contactUs',
    component: ContactUsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
