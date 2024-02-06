import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'forgot-password',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

  form!: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      phoneNumber: [null, Validators.required],
      captchaCode: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.form);
  }
}
