import { UserService } from './../services/user.service';
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  adminEmail = 'george.bluth@reqres.in';

  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (
      this.userService.currentUser &&
      this.userService.currentUser.email === this.adminEmail
    )
      return true;
    else {
      window.alert(
        'We are sorry, you do not have permission to view this page!'
      );
      this.router.navigateByUrl('auth');
      return false;
    }
  }
}
