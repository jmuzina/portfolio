import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import TimeUtils from '../../../../util/time';

@Pipe({ name: 'humanizedDuration' })
export class HumanizedDurationPipe implements PipeTransform {
  transform(
    startDate: moment.Moment,
    opts?: { endDate?: moment.Moment },
  ): string {
    opts ||= {};
    opts.endDate ||= moment(moment.now());
    return TimeUtils.getFormattedDateDiff(
      startDate.toDate(),
      opts.endDate.toDate(),
    );
  }
}
