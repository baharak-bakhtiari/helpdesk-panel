import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './components/admin/dashboard-layout/dashboard-layout.component';
import { ForgetPasswordComponent } from './components/authentication/forget-password/forget-password.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { ProductsComponent } from './components/admin/New folder/products/products.component';

export const routes: Routes = [
  {
    path: '', loadComponent: () => DashboardLayoutComponent, children: [{
      path: 'products', loadComponent: () => ProductsComponent
    }]
  },
  { path: 'login', loadComponent: () => LoginComponent, data: { allowAnonymous: true } },
  { path: 'forgot-password', loadComponent: () => ForgetPasswordComponent, data: { allowAnonymous: true }, },
  { path: 'reset-password', loadComponent: () => ResetPasswordComponent, data: { allowAnonymous: true } },
  { path: 'not-found', loadComponent: () => NotFoundComponent, data: { allowAnonymous: true } },
  { path: '**', redirectTo: '/not-found', data: { allowAnonymous: true } }
];

