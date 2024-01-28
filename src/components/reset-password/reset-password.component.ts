import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InputPasswordComponent } from '../input-password/input-password.component';

@Component({
  selector: 'reset-password',
  standalone: true,
  imports: [RouterLink, InputPasswordComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

}
