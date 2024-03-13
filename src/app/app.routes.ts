import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
 {
  path: 'login',
  component: SignInComponent,
 },
 {
  path: 'sign-up',
  component: SignUpComponent
 },
 {
  path: 'dashboard',
  component: DashboardComponent
 },
 {
  path: '',
  component: LandingComponent
 }
];
