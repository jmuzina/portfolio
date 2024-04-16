import { IResponsibilityOpts } from 'src/app/interfaces/employment/Responsibility';
import { Skill } from '../Skill';
import { Employer } from './Employer';
import { IJobOpts } from 'src/app/interfaces/employment/Job';
import moment from 'moment';

export class Responsibility implements IResponsibilityOpts {
  text!: string;

  constructor(opts: IResponsibilityOpts) {
    Object.assign(this, opts);
  }
}

export class Job {
  title!: string;

  started_at!: moment.Moment;

  ended_at?: moment.Moment;

  ends_in_future!: boolean;

  employer!: Employer;

  skills: Skill[] = [];

  responsibilities: Responsibility[] = [];

  constructor(opts: IJobOpts) {
    Object.assign(this, opts);
    if (opts.started_at) this.started_at = moment(opts.started_at);
    if (opts.ended_at) this.ended_at = moment(opts.ended_at);
    // If ended_at is in the future, clear ended_at (show it in future)
    this.ends_in_future = !!(
      this.ended_at && this.ended_at.isAfter(moment.now())
    );
  }

  static Sort(a: Job, b: Job): number {
    if (a.ends_in_future && !b.ends_in_future && b.started_at.unix() <= a.started_at.unix()) return -1;
    if (b.ends_in_future && !a.ends_in_future && a.started_at.unix() <= b.started_at.unix()) return 1;

    return b.started_at.unix() - a.started_at.unix();
  }
}
