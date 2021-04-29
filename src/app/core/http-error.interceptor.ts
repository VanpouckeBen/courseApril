import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError(this.handleError)
      );

  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it Accodingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // the backend returned an unseccesful response conde.
      // the response body may contain clues as to what went wrong.
      // console.error(`backend returned code ${error.status}, body was: ${error.error}`);
    }

    // Return an observable with a user-facing error message.
    return throwError('Something bad happend; please try again later');
  }
}
