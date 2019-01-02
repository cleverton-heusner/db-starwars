import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anoNascimento'
})
export class AnoNascimentoPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\./g, ',').replace(/BBY/g, ' BBY');
  }
}
