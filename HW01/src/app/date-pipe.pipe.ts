import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {
  transform(value: string): string {
    const dateRegex = /(\d{4})[./](\d{2})[./](\d{2})/g;
    const formattedValue = value.replace(dateRegex, '$3-$2-$1');
    return formattedValue;
  }
}
