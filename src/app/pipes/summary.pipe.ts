import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string | null {
    if (value) {
      // return value.substring(0, 50);
      const limit = (args && args[0]) ? args[0] : 50;
      return value.substring(0, limit) + '...';
    }
    return null;
  }

}
