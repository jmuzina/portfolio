import { Pipe, PipeTransform } from '@angular/core';
import { pluralString } from 'src/app/util/string';

@Pipe({ name: 'plural' })
export class PluralPipe implements PipeTransform {
  transform(s: string, arr: any[], suffix = 's'): string {
    return pluralString(s, arr.length, suffix);
  }
}
