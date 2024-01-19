import { IEmployerOpts } from '../../interfaces/employment/Employer';
import { Job } from './Job';

export class Employer {
  name!: string;

  jobs: Job[] = [];

  constructor(opts: IEmployerOpts) {
    this.name = opts.name;
    this.jobs = opts.jobs.map((jobOpts) => new Job(jobOpts)).sort(Job.Sort);
    if (!this.jobs.length)
      throw new Error(`Employer ${this.name} has no mapped jobs.`);
  }

  static Sort(a: Employer, b: Employer): number {
    return Job.Sort(a.jobs[0], b.jobs[0]);
  }
}
