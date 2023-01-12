import { Component, OnInit } from '@angular/core';
import { StorageService } from './services/storage.service';
import { UserContextService } from './services/user/context.service';
import { LoginService } from './services/user/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mg-blog';

  constructor(
    private storageSrv: StorageService,
    private userLoginSrv: LoginService,
    private userContextSrv: UserContextService
  ) {}

  ngOnInit() {
    console.log('From on init of app-component');

    const isLogged = this.storageSrv.isLogged();

    if (isLogged) {
      const token = this.storageSrv.getUser();

      if (!token) {
        return;
      }

      this.userLoginSrv.loginByToken(token).subscribe((result) => {
        if (result.status === 'success') {
          this.userContextSrv.saveUser(result.value.user);
          this.storageSrv.saveUser(result.value.token);
        }
      });
    }
  }
}
