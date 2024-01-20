import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PasswordComponent } from '../password/password.component';

@Component({
  selector: 'login',
  standalone: true,
  imports: [RouterLink, PasswordComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
