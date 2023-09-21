import { Skill } from 'src/app/classes/Skill';
import { Employer } from 'src/app/classes/employment/Employer';
import { Responsibility } from 'src/app/classes/employment/Job';

export interface IJobOpts {
  title: string;
  started_at: Date;
  ended_at?: Date;
  employer: Employer;
  skills: Skill[];
  responsibilities: Responsibility[];
}
