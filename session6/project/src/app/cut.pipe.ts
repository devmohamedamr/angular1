import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.slice(0,4);
  }

}
