import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserType } from './core/enums';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: UserType.Doctor.toString(),
    loadChildren: () => import('./modules/doctor/doctor.module').then(m => m.DoctorModule)
  },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
