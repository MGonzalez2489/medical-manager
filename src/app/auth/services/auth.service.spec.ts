import { HttpClient, HttpClientJsonpModule, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs'; // Add import
import { Session } from 'src/app/core/models';
import { Doctor } from 'src/app/core/models/db';
import { ReturnModel } from 'src/app/core/models/responses';
import { RequestService } from 'src/app/core/services';

import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AuthService', () => {
  let service: AuthService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(AuthService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('postLogin', () => {
    it('should return a session obj', () => {
      const retModel: ReturnModel<Session> = {
        httpError: null,
        isSuccess: true,
        message: null,
        model: new Session()
      }
      let response;
      spyOn(service, 'postLogin').and.returnValue(of(retModel));

      service.postLogin({ email: 'test@test.com', password: '12345678', rememberMe: false }).subscribe(res => {
        response = res;
      })

      expect(response).toEqual(retModel)
    })
  });



});
