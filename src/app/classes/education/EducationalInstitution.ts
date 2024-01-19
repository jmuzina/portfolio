import { ILabelled } from '../../interfaces/Labelled';

export type EducationalInstitutionType = ILabelled;

export interface IEducationalInstitution {
  name: string;
  type: ILabelled;
}

export class EducationalInstitution {
  name!: string;

  type!: EducationalInstitutionType;

  constructor(opts: IEducationalInstitution) {
    Object.assign(this, opts);
  }

  static Sort(a: EducationalInstitution, b: EducationalInstitution) {
    if (a.name !== b.name) return a.name.localeCompare(b.name);
    return a.type.label.localeCompare(b.type.label);
  }
}
