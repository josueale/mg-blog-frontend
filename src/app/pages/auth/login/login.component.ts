import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { StorageService } from 'src/app/services/storage.service';
import { LoginService } from 'src/app/services/user/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  form = {
    email: '',
    password: '',
  };

  constructor(
    private userSvc: LoginService,
    private storageSvc: StorageService
  ) {}

  storage() {
    return this.storageSvc;
  }

  handleOnSubmit({ value: form }: NgForm) {
    console.log(form);

    const saveToken = (token: string) => {
      this.storageSvc.saveUser(token);
    };

    this.userSvc.login(form).subscribe({
      next(response) {
        if (response.status === 'success') {
          alert(response.message);
          saveToken(response.value.token);
        }
      },
    });
  }
}
