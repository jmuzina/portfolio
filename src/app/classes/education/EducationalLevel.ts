import { IEducationalLevelOpts } from 'src/app/interfaces/education/EducationLevel';

export class EducationalLevel implements IEducationalLevelOpts {
  id!: number;

  label!: string;

  priority!: number;

  static Sort(a: EducationalLevel, b: EducationalLevel) {
    if (a.priority < b.priority) return -1;
    if (a.priority === b.priority) return a.label.localeCompare(b.label);
    return 1;
  }

  constructor(opts: IEducationalLevelOpts) {
    Object.assign(this, opts);
  }
}
