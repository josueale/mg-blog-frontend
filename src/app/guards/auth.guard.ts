import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanMatch,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanMatch {
  constructor(private authSrv: AuthService, private router: Router) {}

  basicValidation() {
    return this.authSrv.validateAuthorization().pipe(
      tap((res) => {
        if (!res) {
          this.router.navigate(['/auth/login']);
        }
      })
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return this.basicValidation();
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | boolean {
    // logic here

    return this.basicValidation();
  }
}
