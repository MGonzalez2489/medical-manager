import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoadingSpinnerService } from './core/modules/loading-spinner/loading-spinner.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BusyHttpRequestInterceptor } from './core/interceptors/busy-http-request.interceptor';
import { RequestInterceptor } from './core/interceptors/request.interceptor';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgbModule,
    CoreModule,
    FontAwesomeModule,
    SharedModule,
  ],
  providers: [
    LoadingSpinnerService,
    {
      provide: HTTP_INTERCEPTORS, useClass: BusyHttpRequestInterceptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
