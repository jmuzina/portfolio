import moment from 'moment';
import { pluralString } from './string';

export default class TimeUtils {
  /**
   * Converts two dates to a formatted string of time interval between them
   * https://www.htmlgoodies.com/javascript/formatting-javascript-date-intervals-into-years-months-weeks-and-days/
   * @param date1
   * @param date2
   * @returns Interval between `date1` and `date2` in a human readable string
   */
  static getFormattedDateDiff(date1: Date, date2: Date): string {
    const b = moment(date1),
      a = moment(date2),
      intervals: moment.unitOfTime.DurationConstructor[] = ['years', 'months'],
      out: string[] = [],
      duration = moment.duration(b.diff(a));

    if (
      Math.abs(duration.asSeconds()) < moment.duration(1, 'month').asSeconds()
    )
      return '<1 month';

    intervals.forEach((interval) => {
      const diff = a.diff(b, interval);
      b.add(diff, interval);
      if (!diff) return;

      out.push(
        `${Math.abs(diff)} ${pluralString(
          // remove the trailing s from the unit
          interval
            .split('')
            .filter((c, i) => i !== interval.length - 1 || c !== 's')
            .join(''),
          Math.abs(diff),
        )}`,
      );
    });

    return out.join(', ');
  }
}
