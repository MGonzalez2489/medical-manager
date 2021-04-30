import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './shared/components/layout/page/page.component';
import { LoginGuard } from './shared/guards';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    component: PageComponent,
    canActivate: [LoginGuard],
    children: [
      { path: 'home', loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule) },
      { path: 'patients', loadChildren: () => import('./modules/patients/patients.module').then((m) => m.PatientsModule) },
      { path: 'appointments', loadChildren: () => import('./modules/appointments/appointments.module').then((m) => m.AppointmentsModule) },

    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
