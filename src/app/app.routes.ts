import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

export const routes: Routes = [
  { path: '', loadComponent: () => DashboardComponent },
  { path: 'login', loadComponent: () => LoginComponent, data: { allowAnonymous: true } },
  { path: 'forgot-password', loadComponent: () => ForgetPasswordComponent, data: { allowAnonymous: true }, },
  { path: 'reset-password', loadComponent: () => ResetPasswordComponent, data: { allowAnonymous: true } },
  { path: 'not-found', loadComponent: () => NotFoundComponent, data: { allowAnonymous: true } },
  { path: '**', redirectTo: '/not-found', data: { allowAnonymous: true } }
];

