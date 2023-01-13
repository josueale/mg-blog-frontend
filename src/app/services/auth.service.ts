import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { of, tap } from 'rxjs';

import { Api } from '../types/api';
import { User, UserLogin } from '../types/user';

import { API } from '../environments/environments';
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
  constructor() {}

  private clientHttp = inject(HttpClient);
  private storageSrv = inject(StorageService);
  private router = inject(Router);

  private app: AppContext | null = initialState;

  get auth() {
    return { ...this.app };
  }

  validateAuthorization() {
    const token = this.storageSrv.getUser();

    if (!token) return of(false);

    this.loginByToken(token).subscribe((res) => {
      if (res.status === 'success') {
        return of(true);
      }

      return of(false);
    });

    return of(false);
  }

  logout() {
    this.app = null;
    this.storageSrv.removeUser();
    this.router.navigate(['/']);
  }

  login(credentials: any) {
    return this.clientHttp
      .post<Api<UserLogin>>(`${API}/api/v1/users/login`, credentials)
      .pipe(
        tap((res) => {
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

  setAppContext(
    newState: AppContext | ((prevState: AppContext | null) => AppContext)
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
