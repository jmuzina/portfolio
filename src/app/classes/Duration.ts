import {
  SECONDS_IN_DAY,
  SECONDS_IN_MONTH,
  SECONDS_IN_YEAR,
} from '../constants/time';
import { TimeThreshold } from './TimeThreshold';

const THRESHOLDS: TimeThreshold[] = [
  new TimeThreshold('year', SECONDS_IN_YEAR),
  new TimeThreshold('month', SECONDS_IN_MONTH),
  new TimeThreshold('day', SECONDS_IN_DAY),
].sort(TimeThreshold.sort);

export class Duration {
  public lastTimeStr!: string;

  public get start(): Date {
    return this._start;
  }

  public set start(start: Date) {
    this.updateTimeStr();
  }

  public get end(): Date {
    return this._end;
  }

  public set end(end: Date) {
    this._end = end;
    this.updateTimeStr();
  }

  private updateTimeStr(): void {
    this.lastTimeStr = this.asString();
  }

  /** @returns Time between end and start, in milliseconds */
  public msPassed(): number {
    return (this._end || new Date()).getTime() - this._start.getTime();
  }

  /** @returns approximate time passed during the duration */
  public asString(): string {
    const msPassed = this.msPassed();
    const secondsPassed = msPassed / 1000;

    const matchedThreshold =
      THRESHOLDS.find((threshold: TimeThreshold) =>
        threshold.durationIsAtLeastThreshold(secondsPassed)
      ) || THRESHOLDS[THRESHOLDS.length - 1];

    const result: string = matchedThreshold.asString(
      secondsPassed,
      'less than a day'
    );

    return result;
  }

  constructor(private _start: Date, private _end: Date) {
    if (_start) this._start = new Date(_start);
    if (_end) this._end = new Date(_end);
    this.updateTimeStr();
  }
}
