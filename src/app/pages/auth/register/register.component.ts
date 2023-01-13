import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

import { getPasswordStrength } from 'src/app/helpers/password';
import { RegisterService } from 'src/app/services/user/register.service';
import { RegisterForm } from 'src/app/types/auth.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  formGroup!: FormGroup;

  form: RegisterForm = {
    name: '',
    lastname: '',

    email: '',
    password: '',
    terms_acepted: false,
  };

  allowedToSubmit = false;

  passwordScore = 0;

  constructor(private userSvc: RegisterService) {}

  handlePassword(value: string) {
    this.passwordScore = getPasswordStrength(value);
  }

  handleOnSubmit({ value: form }: NgForm) {
    this.userSvc.register(form).subscribe({
      next(response) {
        if (response.status === 'success') {
          console.log(response.message);
        }
      },
    });
  }

  // how to implement this ??
  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
}
