export interface IEducationalInstitutionType {
  id: number;
  label: string;
}

export interface IEducationalInstitution {
  id: number;
  name: string;
  institutionType: IEducationalInstitutionType;
}

export class EducationalInstitution {
  id!: number;

  name!: string;

  type!: IEducationalInstitutionType;

  static Sort(a: EducationalInstitution, b: EducationalInstitution) {
    if (a.name !== b.name) return a.name.localeCompare(b.name);
    return a.type.label.localeCompare(b.type.label);
  }

  constructor(opts: IEducationalInstitution) {
    this.id = opts.id;
    this.name = opts.name;
    this.type = opts.institutionType;
  }

}
