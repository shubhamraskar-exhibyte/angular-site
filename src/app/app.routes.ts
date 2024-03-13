import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { SettingComponent } from './setting/setting.component';

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
 },
 {
  path: 'details/:id',
  component: FoodDetailsComponent
 },
 {
  path: 'setting',
  component: SettingComponent
 }
];
