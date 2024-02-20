import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { PhotoCardComponent } from './photo-card/photo-card.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details/:index', loadComponent: () => import('./photo-details/photo-details.component').then(m => m.PhotoDetailsComponent) },
];
