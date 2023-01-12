import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from 'src/app/environments/environments';
import { Api } from 'src/app/types/api';
import { User } from 'src/app/types/user';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(user: any) {
    return this.http.post<Api<User>>(`${API}/api/v1/users/register`, user);
  }
}
