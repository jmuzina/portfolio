import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({ name: 'momentToDate' })
export class MomentToDatePipe implements PipeTransform {
  transform(m?: moment.Moment): Date | null {
    if (!m || !moment.isMoment(m) || !m.isValid()) return null;
    return moment(m).toDate();
  }
}
