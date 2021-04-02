import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { LoadingSpinnerService } from './loading-spinner.service';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoadingSpinnerComponent implements OnDestroy {

  pTemplate = `
  <div style="color: #64d6e2" class="la-ball-clip-rotate-multiple la-3x">
    <div>hello world</div>
    <div></div>
    <div></div>
  </div>`;

  pLoadingText = '';


  pThreshold = 500;

  pZIndex = 9999;

  @Input()
  public set zIndex(value: number) {
    this.pZIndex = value;
  }

  public get zIndex(): number {
    return this.pZIndex;
  }

  @Input()
  public set template(value: string) {
    this.pTemplate = value;
  }

  public get template(): string {
    return this.pTemplate;
  }

  @Input()
  public set loadingText(value: string) {
    this.pLoadingText = value;
  }

  public get loadingText(): string {
    return this.pLoadingText;
  }

  @Input()
  public set threshold(value: number) {
    this.pThreshold = value;
  }

  public get threshold(): number {
    return this.pThreshold;
  }

  subscription: Subscription;

  showSpinner = false;

  constructor(
    private spinnerService: LoadingSpinnerService
  ) {
    this.createServiceSubscription();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  createServiceSubscription(): void {
    let timer: any;

    this.subscription =
      this.spinnerService.getMessage().subscribe(show => {
        if (show > 0) {

          if (timer) {
            return;
          }

          timer = setTimeout(function(): void {
            timer = null;
            this.showSpinner = show > 0;
          }.bind(this), this.threshold);

        } else {
          clearTimeout(timer);
          timer = null;
          this.showSpinner = false;
        }
      });
  }
}
