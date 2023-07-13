import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoggedService implements CanActivate {

  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const logged = sessionStorage.getItem('logged');
    if (logged === '0' || logged === null) {
      this.router.navigate(['login']);
      return false;
    } else {
      return true;
    }
  }

}
