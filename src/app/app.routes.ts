import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './components/admin/dashboard-layout/dashboard-layout.component';
import { ForgetPasswordComponent } from './components/authentication/forget-password/forget-password.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { ResetPasswordComponent } from './components/authentication/reset-password/reset-password.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';
import { HomeComponent } from './components/admin/dashboard-pages/home/home.component';
import { OrdersComponent } from './components/admin/dashboard-pages/orders/orders.component';
import { TicketsComponent } from './components/admin/dashboard-pages/tickets/tickets.component';

export const routes: Routes = [
  {
    path: '', loadComponent: () => DashboardLayoutComponent, children: [
      { path: 'home', loadComponent: () => HomeComponent },
      { path: 'tickets', loadComponent: () => TicketsComponent },
      { path: 'products', loadComponent: () => OrdersComponent },
    ]
  },
  { path: 'login', loadComponent: () => LoginComponent, data: { allowAnonymous: true } },
  { path: 'forgot-password', loadComponent: () => ForgetPasswordComponent, data: { allowAnonymous: true }, },
  { path: 'reset-password', loadComponent: () => ResetPasswordComponent, data: { allowAnonymous: true } },
  { path: 'not-found', loadComponent: () => NotFoundComponent, data: { allowAnonymous: true } },
  { path: '**', redirectTo: '/not-found', data: { allowAnonymous: true } }
];

