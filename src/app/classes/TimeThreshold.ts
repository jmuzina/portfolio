import { pluralString } from '../util/string';

export class TimeThreshold {
  public static sort(a: TimeThreshold, b: TimeThreshold) : -1 | 0 | 1 {
    if (a.minimumSeconds === b.minimumSeconds) return 0;

    if (a.minimumSeconds <= b.minimumSeconds) return 1;

    return -1;
  }

  public durationIsAtLeastThreshold(seconds: number): boolean {
    return this.minimumSeconds <= seconds;
  }

  public asString(seconds: number, fallback: string) {
    if (!this.durationIsAtLeastThreshold(seconds)) return fallback;

    const numOfDuration = Math.ceil(seconds / this.minimumSeconds);

    return `${numOfDuration} ${pluralString(this.singularBase, numOfDuration, this.pluralSuffix)}`;
  }


  constructor(public singularBase: string, public minimumSeconds: number, public pluralSuffix = 's') {}
}
