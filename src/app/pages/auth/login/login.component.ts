import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
import { LoginForm } from 'src/app/types/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  form: LoginForm = {
    email: '',
    password: '',
  };

  constructor(private authSvc: AuthService) {}

  handleOnSubmit({ value: form }: NgForm) {
    this.authSvc.login(form).subscribe();
  }
}
