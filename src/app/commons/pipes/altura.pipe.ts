import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'altura'
})
export class AlturaPipe implements PipeTransform {
  transform(value: string): string {
    return String(+value/100).replace(/\./g, ',');
  }
}
