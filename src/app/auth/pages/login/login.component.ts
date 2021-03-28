import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSubmitted: boolean;
  loginForm: FormGroup;
  errorMessage: string;
  //alert = AlertType.danger;
  constructor(
   // private authService: AuthService,
    private formBuilder: FormBuilder,
   // private sessionService: SessionService,
    private router: Router) { }
  get lForm() { return this.loginForm.controls; }
  ngOnInit(): void {
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
    this.router.navigate(['1']);
    //this.isSubmitted = true;
    this.errorMessage = null;
    if (this.loginForm.valid) {
      
      // this.authService.postLogin(this.loginForm.value).subscribe(data => {
      //   if (data.isSuccess) {
      //     this.sessionService.setSession(data.model);
      //     const newRoute = data.model.user.role == 'consumer'? '' : data.model.user.role;
      //     this.router.navigate(['/'+newRoute]);
      //   }
      //   else {
      //     this.errorMessage = data.message;
      //   }
      // }, error => {
      //   this.errorMessage = new ReturnErrorModel(error).message;
      // });

    }
  }
}
