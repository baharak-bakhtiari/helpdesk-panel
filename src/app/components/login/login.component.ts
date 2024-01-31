import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputPasswordComponent } from '../input-password/input-password.component';

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule, RouterLink, InputPasswordComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form!: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
      captchaCode: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.form);
  }
}
