import { IDegreeOpts, IDegreeTypeOpts, IDegreeTypeQryOpts } from 'src/app/interfaces/education/Degree';
import { EducationalInstitution } from './EducationalInstitution';
import { Major } from './Major';
import { IEducationalField } from 'src/app/interfaces/education/EducationalField';
import { EducationalLevel } from './EducationalLevel';

export class DegreeType implements IDegreeTypeOpts {
  id!: number;

  prefix!: string;

  usesSuffixInline!: boolean;

  level!: EducationalLevel;

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

      // award and start dates are identical, defer to educational level sort
      const educationalLevelSortResult = EducationalLevel.Sort(a.type.level, b.type.level);
      if (educationalLevelSortResult) return educationalLevelSortResult;

      // Educational levels are also the same. Defer to educational institution sort.
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

  constructor(opts: IDegreeOpts) {
    this.id = opts.id;
    this.gpa = opts.gpa;
    this.startedOn = new Date(opts.startedOn);
    this.awardedOn = opts.awardedOn ? new Date(opts.awardedOn) : undefined;
    this.institution = opts.institution;
    this.major = opts.major;
    this.field = opts.field;
    this.type = opts.type;
  }
}
