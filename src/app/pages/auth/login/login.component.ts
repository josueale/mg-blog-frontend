import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private authSvc: AuthService, private fb: FormBuilder) {}

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  isValidField(field: string) {
    return (
      !this.loginForm.controls[field].valid &&
      this.loginForm.controls[field].touched
    );
  }

  handleOnSubmit({ value: form }: FormGroup) {
    // TODO validate answer
    // TODO add toast (even if its boring AF)
    // ?  redirect to login???

    this.authSvc.login(form).subscribe();
  }
}
