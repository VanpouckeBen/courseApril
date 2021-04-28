import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoggingService {

  constructor() { }

  error(error: string): void {
    console.error(error);
  }

  information(info: string): void {
    console.info(info);
  }
}
