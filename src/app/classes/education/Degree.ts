import {
  IDegreeHonorOpts,
  IDegreeOpts,
  IDegreeTypeOpts,
} from 'src/app/interfaces/education/Degree';
import { EducationalInstitution } from './EducationalInstitution';
import { Major } from './Major';
import { IEducationalField } from 'src/app/interfaces/education/EducationalField';

export class DegreeHonor implements IDegreeHonorOpts {
  label!: string;

  constructor(opts: IDegreeHonorOpts) {
    Object.assign(this, opts);
  }
}

export class DegreeType {
  label!: string;

  constructor(opts: IDegreeTypeOpts) {
    Object.assign(this, opts);
  }
}

export class Degree {
  id!: number;

  gpa?: number;

  startedOn!: Date;

  awardedOn?: Date;

  institution!: EducationalInstitution;

  major!: Major;

  field!: IEducationalField;

  type!: DegreeType;

  honor?: DegreeHonor;

  constructor(opts: IDegreeOpts) {
    this.gpa = opts.gpa;
    this.startedOn = new Date(opts.started_on);
    this.awardedOn = opts.awarded_on ? new Date(opts.awarded_on) : undefined;
    this.institution = new EducationalInstitution(opts.institution);
    this.major = opts.major;
    this.honor = opts.honor;
    this.type = new DegreeType(opts.type);
    this.field = opts.field;
  }

  static Sort(a: Degree, b: Degree) {
    const degreeTimestamps = {
      a: {
        start: a.startedOn.getTime(),
        end: a.awardedOn?.getTime(),
      },
      b: {
        start: b.startedOn.getTime(),
        end: b.awardedOn?.getTime(),
      },
    };

    if (degreeTimestamps.a.end === degreeTimestamps.b.end) {
      // award dates are the same

      // first try to differentiate by degree start dates.
      // Whichever was started more recently should be first.
      if (degreeTimestamps.a.start > degreeTimestamps.b.start) return -1;
      if (degreeTimestamps.a.start < degreeTimestamps.b.start) return 1;

      // Defer to educational institution sort.
      return EducationalInstitution.Sort(a.institution, b.institution);
    }

    // award dates are different.
    // if one of the degrees is still in progress it should come first.

    if (!degreeTimestamps.a.end) return -1;
    if (!degreeTimestamps.b.end) return 1;

    // Both degrees are completed and were completed at different times.
    // The one that was completed more recently should appear first.
    if (degreeTimestamps.a.end > degreeTimestamps.b.end) return -1;
    return 1;
  }
}
