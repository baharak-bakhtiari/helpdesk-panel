import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputPasswordComponent } from '../../shared/input-password/input-password.component';

@Component({
  selector: 'reset-password',
  standalone: true,
  imports: [CommonModule, RouterLink, InputPasswordComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

  form!: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      otpCode: [null, Validators.required],
      newPassword: [null, Validators.required],
      repeatNewPassword: [null, Validators.required],
      captchaCode: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.form);
  }
}
