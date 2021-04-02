import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { AgePipe, PhonePipe } from './pipes';


@NgModule({
  declarations: [NavbarComponent, StopPropagationDirective, PhonePipe, AgePipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule,
    NgbModule
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule,
    NavbarComponent,
    FontAwesomeModule,
    RouterModule,
    NgbModule,
    StopPropagationDirective,
    PhonePipe,
    AgePipe
  ]
})
export class SharedModule { }
