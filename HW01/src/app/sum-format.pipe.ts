import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sumFormat'
})
export class SumFormatPipe implements PipeTransform {
  transform(value: string): string {
    const sumRegex = /(\d+)\s?\+\s?(\d+)\s?=/;
    const match = value.match(sumRegex);
    if (match) {
      const num1 = parseInt(match[1], 10);
      const num2 = parseInt(match[2], 10);
      const sum = num1 + num2;
      return `${num1} + ${num2} = ${sum}`;
    }
    return value;
  }
}
