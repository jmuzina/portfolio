import { EducationalInstitution } from 'src/app/classes/education/EducationalInstitution';
import { Major } from 'src/app/classes/education/Major';
import { IEducationalField } from './EducationalField';
import { DegreeHonor, DegreeType } from 'src/app/classes/education/Degree';
import { EducationalLevel } from 'src/app/classes/education/EducationalLevel';

export interface IDegreeTypeOpts {
  id: number;
  prefix: string;
  usesSuffixInline: boolean;
  level: EducationalLevel;
  label: string;
}

export interface IDegreeHonorOpts {
  id: number;
  label: string;
}

export interface IDegreeTypeQryOpts {
  id: number;
  prefix: string;
  usesSuffixInline: boolean;
  education_level_fk: number;
  label: string;
}

export interface IDegreeQryOpts {
  id: number;
  gpa?: number;
  startedOn: string;
  awardedOn?: string;
  institution_fk: number;
  major_fk: number;
  degree_field_fk: number;
  degree_type_fk: number;
  honor_fk?: number;
}

export interface IDegreeOpts {
  id: number;
  gpa?: number;
  startedOn: string;
  awardedOn?: string;
  institution: EducationalInstitution;
  major: Major;
  field: IEducationalField;
  type: DegreeType;
  honor?: DegreeHonor;
}
