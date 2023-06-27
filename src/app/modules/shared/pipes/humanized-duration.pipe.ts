import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'humanizedDuration' })
export class HumanizedDurationPipe implements PipeTransform {
  transform(startDate: Date, endDate?: Date): string {
    endDate ||= new Date();
    const datesToMoments = {
      start: moment(startDate),
      end: moment(endDate),
    };
    const timespan: number = datesToMoments.start.diff(datesToMoments.end);
    const duration: moment.Duration = moment.duration(timespan);
    const result: string = duration.humanize();
    return result;
  }
}
