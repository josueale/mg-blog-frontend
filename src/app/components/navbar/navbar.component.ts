import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UserContextService } from 'src/app/services/user/context.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(
    private storageSvc: StorageService,
    private userContextSrv: UserContextService
  ) {}

  showAuthButtons = false;

  handleLogOut() {
    this.storageSvc.removeUser()
    this.userContextSrv.saveUser(null)
  }

  ngOnInit() {
    const user = this.userContextSrv.getUser();
    if (user?.isAuthenticated) {
      this.showAuthButtons = true;
    }
  }
}
