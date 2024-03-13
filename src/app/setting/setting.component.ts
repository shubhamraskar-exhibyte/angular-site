import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-setting',
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
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss',
})
export class SettingComponent {
  toggleReset = false;
  resetpassword: any;
  currentPassword: any;
  localData: any = sessionStorage.getItem('loginData');
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.currentPassword = JSON.parse(this.localData);
    this.resetpassword = this.formBuilder.group({
      oldpassword: ['', Validators.required],
      newpassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.resetpassword.valid) {
      if (
        this.resetpassword.value.oldpassword == this.currentPassword.password
      ) {
        this.currentPassword.password = this.resetpassword.value.newpassword;
        sessionStorage.setItem(
          'loginData',
          JSON.stringify(this.currentPassword)
        );
        this.resetpassword.reset();
        this.toggleReset = false;
      }
    }
  }
}
