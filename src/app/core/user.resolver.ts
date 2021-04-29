import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { error } from 'protractor';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {

  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {

    return this.userService.getUserRemote(Number(route.paramMap.get('id')))
      .pipe(catchError(
        error => {
          alert('error from backend');
          console.log(error);
          return EMPTY;
        }));
  }
}
