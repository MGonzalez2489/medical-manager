import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Session } from 'src/app/core/models';
import { ReturnErrorModel, ReturnModel } from 'src/app/core/models/responses';
import { SessionService } from 'src/app/core/services';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSubmitted: boolean;
  loginForm: FormGroup;
  errorMessage: string;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private sessionService: SessionService,
    private router: Router) { 
    }
  get lForm() { return this.loginForm.controls; }
  ngOnInit(): void {
    this.sessionService.initSession();
    this.initializeForm();
  }
  initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      rememberMe: new FormControl(false)
    });
  }

  submit(): void {
    this.isSubmitted = true;
    this.errorMessage = null;
    if (this.loginForm.valid) {
      this.authService.postLogin(this.loginForm.value).subscribe((data: ReturnModel<Session>) => {
        if (data.isSuccess) {
          this.sessionService.setSession(data.model);
          this.router.navigate(['/home']);
        }
        else {
          this.errorMessage = data.message;
        }
      }, error => {
        this.errorMessage = new ReturnErrorModel(error).message;
      });
    }
  }
}
