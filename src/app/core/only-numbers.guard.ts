import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OnlyNumbersGuard implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const id = 'id';
    const userId = childRoute.params[id];
    const isRoutingAllowed = !isNaN(userId);

    if (!isRoutingAllowed) {
      alert('Id must be a number');
    }

    return isRoutingAllowed;
  }

}
