import { Injectable } from '@angular/core';
import { User } from 'src/app/types/user';

// Is using a service to handle a "state" as a react context?

@Injectable({
  providedIn: 'root',
})
export class UserContextService {
  constructor() {}

  user: User | null = null;

  getUser() {
    return this.user;
  }

  saveUser(user: User){
    this.user = user
  }
}
