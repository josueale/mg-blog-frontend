import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API } from 'src/app/environments/environments';
import { Api } from 'src/app/types/api';
import { UserLogin } from 'src/app/types/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post<Api<UserLogin>>(
      `${API}/api/v1/users/login`,
      credentials
    );
  }

  loginByToken(token: string) {
    return this.http.post<Api<UserLogin>>(`${API}/api/v1/users/login/token`, {
      token,
    });
  }
}
