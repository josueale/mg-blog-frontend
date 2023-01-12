import { Component, OnInit } from '@angular/core';
import { UserContextService } from 'src/app/services/user/context.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(private userContextSrv: UserContextService) {}

  showAuthButtons = false;

  ngOnInit() {
    const user = this.userContextSrv.getUser();
    if (user?.isAuthenticated) {
      this.showAuthButtons = true;
    }
  }

}
