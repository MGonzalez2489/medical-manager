
import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoadingSpinnerService } from './loading-spinner.service';
import { LoadingSpinnerComponent } from './loading-spinner.component';

export * from './loading-spinner.service';
export * from './loading-spinner.component';

@NgModule({
  imports: [],
  declarations: [LoadingSpinnerComponent],
  exports: [LoadingSpinnerComponent],
  providers: [LoadingSpinnerService]
})
export class LoadingSpinnerModule {
  static forRoot(): ModuleWithProviders<object> {
    return {
      ngModule: LoadingSpinnerModule,
      providers: [LoadingSpinnerService]
    };
  }
}
