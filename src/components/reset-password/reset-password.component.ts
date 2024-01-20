import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PasswordComponent } from '../password/password.component';

@Component({
  selector: 'reset-password',
  standalone: true,
  imports: [RouterLink, PasswordComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

}
