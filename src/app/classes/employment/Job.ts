import { IResponsibilityOpts } from 'src/app/interfaces/employment/Responsibility';
import { Skill } from '../Skill';
import { Employer } from './Employer';
import { IJobOpts } from 'src/app/interfaces/employment/Job';

export class Responsibility implements IResponsibilityOpts {
  public id!: number;

  public text!: string;

  constructor(opts: IResponsibilityOpts) {
    Object.assign(this, opts);
  }
}


export class Job implements IJobOpts {
  public title!: string;

  public started_at!: Date;

  public ended_at?: Date;

  public employer!: Employer;

  public skills: Skill[] = [];

  public responsibilities: Responsibility[] = [];

  constructor(opts: IJobOpts) {
    Object.assign(this, opts);
  }
}
