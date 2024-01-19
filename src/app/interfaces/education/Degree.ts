import { IEducationalInstitution } from 'src/app/classes/education/EducationalInstitution';
import { IMajorOpts } from './Major';
import { ILabelled } from '../Labelled';
import { IEducationalField } from './EducationalField';

export type IDegreeTypeOpts = ILabelled;

export type IDegreeHonorOpts = ILabelled;

export type IDegreeFieldOpts = ILabelled;

export interface IDegreeOpts {
  gpa?: number;
  started_on: string;
  awarded_on?: string;
  institution: IEducationalInstitution;
  major: IMajorOpts;
  type: IDegreeTypeOpts;
  field: IEducationalField;
  honor?: IDegreeHonorOpts;
}
