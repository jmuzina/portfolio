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
    if (!a.awardedOn && b.awardedOn) return -1;
    if (a.awardedOn && !b.awardedOn) return 1;

    const aT = a.awardedOn?.getTime() || 0;
    const bT = b.awardedOn?.getTime() || 0;
    if (aT === bT || (!aT && !bT)) return EducationalLevel.Sort(a.type.level, b.type.level);

    if (aT < bT) return -1;
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
