import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatSeconds'
})
export class FormatSecondsPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value > 60 ? value / 60 + ' Minutes' : value + ' Seconds';
  }
}
