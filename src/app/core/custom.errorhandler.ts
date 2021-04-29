import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()


export class CustomErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    console.log('Deze error wordt door de custom error handler opgevangen');
    console.log(error);
  }
}
