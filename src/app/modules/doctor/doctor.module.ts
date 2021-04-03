import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarModule } from 'ng-sidebar';
import { SidebarMenuComponent } from './_components/sidebar-menu/sidebar-menu.component';



@NgModule({
  declarations: [DoctorComponent,  SidebarMenuComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
    SidebarModule.forRoot()
  ]
})
export class DoctorModule { }
