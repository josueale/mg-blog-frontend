import { Injectable } from '@angular/core';
import { UserContext } from 'src/app/types/user';

// Is using a service to handle a "state" as a react context?

@Injectable({
  providedIn: 'root',
})
export class UserContextService {
  constructor() {}

  user: UserContext | null = null;

  getUser() {
    return this.user;
  }

  saveUser(user: UserContext) {
    this.user = user;
  }
}
