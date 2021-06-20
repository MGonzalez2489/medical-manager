import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  isSubmitted:boolean;
  signUpForm: FormGroup;
  errorMessage:string;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router
  ) { }
  get sForm() { return this.signUpForm.controls; }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm():void{
    this.signUpForm = this.formBuilder.group({
      email: new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required]),
      passwordConfirmation: new FormControl(null,[Validators.required])
   }, {validator: MustMatch('password','passwordConfirmation')});
  }
  submit():void{
    this.isSubmitted=true;
    if(this.signUpForm.valid){
      alert("hola soy un form valido");
    }
  }

}
