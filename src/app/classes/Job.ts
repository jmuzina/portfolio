import { Duration } from './Duration';
import { Employer } from './Employer';
import { Skill } from './Skill';

export interface IResponsibilityOpts {
  id: number;
  text: string;
}

export class Responsibility implements IResponsibilityOpts {
  public id!: number;

  public text!: string;

  constructor(opts: IResponsibilityOpts) {
    Object.assign(this, opts);
  }
}

export interface IJobOpts {
  title: string;
  timespan: Duration;
  employer: Employer;
  skills: Skill[];
  responsibilities: Responsibility[];
}

export class Job implements IJobOpts {
  public title!: string;

  public timespan!: Duration;

  public employer!: Employer;

  public skills: Skill[] = [];

  public responsibilities: Responsibility[] = [];

  constructor(opts: IJobOpts) {
    Object.assign(this, opts);
  }
}
