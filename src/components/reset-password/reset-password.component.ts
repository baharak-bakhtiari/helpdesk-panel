import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputPasswordComponent } from '../input-password/input-password.component';

@Component({
  selector: 'reset-password',
  standalone: true,
  imports: [RouterLink, InputPasswordComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

  form!: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      otpCode: [""],
      newPassword: [""],
      RepeatNewPassword: [""],
      captchaCode: [""]
    });
  }

  onSubmit() {
    console.log(this.form);
  }
}
