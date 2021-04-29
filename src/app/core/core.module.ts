import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpParamsInterceptor } from './http-params.interceptor';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { CustomErrorHandler } from './custom.errorhandler';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpParamsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    {provide: ErrorHandler, useClass: CustomErrorHandler}
  ]
})
export class CoreModule { }
