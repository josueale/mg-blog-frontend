import { Injectable } from '@angular/core';

const KEY = 'auth-user';

interface User {}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  removeUser() {
    globalThis.localStorage.removeItem(KEY);
  }

  // todo add user type (only _id?)
  public saveUser(token: string) {
    globalThis.localStorage.removeItem(KEY);
    globalThis.localStorage.setItem(KEY, JSON.stringify(token));
  }

  public getUser(): string | null {
    const raw = globalThis.localStorage.getItem(KEY);

    if (raw) {
      return JSON.parse(raw);
    }

    return null;
  }

  public isLogged() {
    const raw = globalThis.localStorage.getItem(KEY);
    if (raw) {
      return true;
    }
    return false;
  }
}
