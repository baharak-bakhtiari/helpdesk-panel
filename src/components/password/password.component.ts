import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'password',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent {

  @Input()
  placeholder: string = "رمز عبور";
  @Input()
  label: string = "رمز عبور";

  showPassword: boolean = false;

  togglePasswordType(): void {
    this.showPassword = !this.showPassword;
  }
}
