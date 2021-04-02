import { TestBed } from '@angular/core/testing';

import { BusyHttpRequestInterceptor } from './busy-http-request.interceptor';

describe('BusyHttpRequestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BusyHttpRequestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BusyHttpRequestInterceptor = TestBed.inject(BusyHttpRequestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
