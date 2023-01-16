import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { of, tap } from 'rxjs';

import { Api } from '../types/api';
import { User, UserLogin } from '../types/user';

import { API } from '../environments/environments';
import { LoginForm, RegisterForm } from '../types/auth.interface';
import { StorageService } from './storage.service';

interface UserData {
  user: User;
  token: string;
}

// this can be extended for future features
interface AppContext {
  isInitialized: boolean;
  isAuthenticated: boolean;
  isExpired: boolean;
  data: UserData | null;
}

const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  isExpired: false,
  data: null,
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() { }

  private clientHttp = inject(HttpClient);
  private storageSrv = inject(StorageService);
  private router = inject(Router);

  private app: AppContext = initialState;

  get auth() {
    return { ...this.app };
  }

  validateAuthorization() {
    const token = this.storageSrv.getUser();

    if (!token) return of(false);

    return of(true);

    // huh?
    // this.loginByToken(token).subscribe((res) => {
    //   console.log('4');
    //   if (res.status === 'success') {
    //     console.log('5');
    //     console.log(res);
    //     return of(true);
    //   }
    //   console.log('6');

    //   return of(false);
    // });

  }

  saveUser(token: string) {
    this.storageSrv.saveUser(token)
  }

  logout() {
    this.app = initialState;
    this.storageSrv.removeUser();
    this.router.navigate(['/']);
  }

  login(credentials: LoginForm) {
    return this.clientHttp
      .post<Api<UserLogin>>(`${API}/api/v1/users/login`, credentials)
      .pipe(
        tap((res) => {
          this.saveUser(res.value.token)
          this.app = {
            isAuthenticated: true,
            isExpired: false,
            isInitialized: true,
            data: {
              token: res.value.token,
              user: res.value.user,
            },
          };
        })
      );
  }

  loginByToken(token: string) {
    return this.clientHttp
      .post<Api<UserLogin>>(`${API}/api/v1/users/login/token`, { token })
      .pipe(
        tap((res) => {
          if (res.status === 'success') {
            this.app = {
              isAuthenticated: true,
              isInitialized: true,
              isExpired: false,
              data: {
                user: res.value.user,
                token: res.value.token,
              },
            };
          }
        })
      );
  }

  register(credentials: RegisterForm) {
    return this.clientHttp.post<Api<User>>(
      `${API}/api/v1/users/register`,
      credentials
    );
  }

  setAppContext(
    newState: AppContext | ((prevState: AppContext) => AppContext)
  ) {
    if (typeof newState === 'function') {
      this.app = newState(this.app);
      return;
    }

    this.app = newState;
  }

  initApp() {
    console.log('From on init of app-component');

    const token = this.storageSrv.getUser();

    if (!token) {
      this.setAppContext(initialState);
      return;
    }

    if (token) {
      this.loginByToken(token).subscribe();
    }
  }
}
