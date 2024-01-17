import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniquestring'
})
export class UniquestringPipe implements PipeTransform {

  transform(value:string): string {
    let result = '';
    let i = 0;
    while (i < value.length) {
      result += value[i];
      if (i + 1 < value.length && value[i] === value[i + 1]) {
        i++;
      }
      i++;
    }
    return result;
  }

}
