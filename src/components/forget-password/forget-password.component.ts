import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'forgot-password',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

  form!: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      phoneNumber: [""],
      captchaCode: [""]
    });
  }

  onSubmit() {
    console.log(this.form);
  }
}
