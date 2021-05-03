import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { AgePipe, PhonePipe } from './pipes';
import { GenderPipe } from './pipes/gender.pipe';
import { SidebarMenuComponent } from './components/layout/sidebar-menu/sidebar-menu.component';
import { PageHeaderComponent } from './components/layout/page-header/page-header.component';
import { BreadcrumbComponent } from './components/layout/breadcrumb/breadcrumb.component';
import { PageComponent } from './components/layout/page/page.component';
import { SidebarModule } from 'ng-sidebar';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [NavbarComponent, StopPropagationDirective, PhonePipe, AgePipe, GenderPipe, SidebarMenuComponent, BreadcrumbComponent, PageHeaderComponent, PageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule,
    NgbModule,
    SidebarModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    PageComponent,
    FontAwesomeModule,
    RouterModule,
    NgbModule,
    StopPropagationDirective,
    PhonePipe,
    AgePipe,
    GenderPipe,
    TranslateModule
  ]
})
export class SharedModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
