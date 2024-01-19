import { Skill } from 'src/app/classes/Skill';
import { IResponsibilityOpts } from './Responsibility';

export interface IJobOpts {
  title: string;
  started_at: string;
  ended_at?: string;
  skills?: Skill[];
  responsibilities: IResponsibilityOpts[];
}
