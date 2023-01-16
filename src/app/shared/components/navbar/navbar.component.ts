import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private authSrv = inject(AuthService);

  get auth() {
    return this.authSrv.auth;
  }

  handleLogOut() {
    this.authSrv.logout();
  }
}
