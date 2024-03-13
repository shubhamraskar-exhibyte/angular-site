import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  loginForm: any;
  // static email
  public email = 'test@123';
  public password = 'test@123';
  localEmail: any = sessionStorage.getItem("loginData");
  loginData: any
  isLogin: any;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
   this.loginData = JSON.parse(this.localEmail)    
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.isLogin = sessionStorage.getItem('login');
    if (this.isLogin) {
      this.router.navigate(['/dashboard']);
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginForm.value.email == (this.loginData.email ||this.email ) &&
      this.loginForm.value.password == (this.loginData.password ||this.password)
        ? this.navigate()
        : alert;
    }
  }

  navigate() {
    this.router.navigate(['/dashboard']);
    sessionStorage.setItem('login', this.loginForm.value.email);
  }
}
