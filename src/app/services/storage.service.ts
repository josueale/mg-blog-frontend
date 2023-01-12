import { Injectable } from '@angular/core';

const KEY = 'auth-user';

interface User {}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  clearStorage() {
    globalThis.localStorage.clear();
  }

  // todo add user type (only _id?)
  public saveUser(user: any) {
    globalThis.localStorage.removeItem(KEY);
    globalThis.localStorage.setItem(KEY, JSON.stringify(user));
  }

  public getUser(): User | null {
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
