import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthStore, AuthState } from '@trungk18/project/auth/auth.store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  user: AuthState;

  constructor(
    private store: AuthStore,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      if (this.store.getValue().id) {
        this.router.navigate(['project']);
        return of(true);
      } else {
        this.router.navigate(['login']);
        return of(false);
      }
  }
}
