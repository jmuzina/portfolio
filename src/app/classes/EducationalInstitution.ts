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

  constructor(opts: IEducationalInstitution) {
    this.id = opts.id;
    this.name = opts.name;
    this.type = opts.institutionType;
  }

}
