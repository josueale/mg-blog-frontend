import { Injectable } from '@angular/core';
import { UserContext } from 'src/app/types/user';

// Is using a service to handle a "state" as a react context?

@Injectable({
  providedIn: 'root',
})
export class UserContextService {
  constructor() {}

  // shall we be using smt like this?
  // private user: UserContext | null = null;
  user: UserContext | null = null;

  getUser() {
    return this.user;
  }

  saveUser(user: UserContext | null) {
    this.user = user;
  }
}
