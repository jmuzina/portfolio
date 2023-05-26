import { Duration } from './Duration';
import { Employer } from './Employer';

export interface IJobOpts {
  title: string;
  timespan: Duration;
  employer: Employer;
}

export class Job implements IJobOpts {
  public title!: string;

  public timespan!: Duration;

  public employer!: Employer;

  constructor(opts: IJobOpts) { Object.assign(this, opts);}
}
