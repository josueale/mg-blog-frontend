import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { getPasswordStrength } from 'src/app/helpers/password';
import { RegisterService } from 'src/app/services/user/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  constructor(private userSvc: RegisterService, private fb: FormBuilder) {}

  passwordPills = [1, 2, 3, 4];

  registerForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    terms_acepted: [false, Validators.requiredTrue],
  });

  allowedToSubmit = false;

  passwordScore = 0;

  validateInput(name: string) {
    return (
      !this.registerForm.controls[name].valid &&
      this.registerForm.controls[name].touched
    );
  }

  handlePassword(value: string) {
    this.passwordScore = getPasswordStrength(value);
  }

  handleOnSubmit({ value: form }: FormGroup) {
    this.userSvc.register(form).subscribe({
      next(response) {
        if (response.status === 'success') {
          console.log(response.message);
        }
      },
    });
  }

  onChanges(): void {
    // suscribes to password input in order to update passwordScore
    this.registerForm.get('password')?.valueChanges?.subscribe((value) => {
      this.handlePassword(value);
    });
  }

  ngOnInit() {
    this.onChanges();
  }
}
