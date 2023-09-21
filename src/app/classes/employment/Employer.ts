import { IEmployerOpts } from '../../interfaces/employment/Employer';
import { Job } from './Job';

export class Employer implements IEmployerOpts {
  public id!: number;

  public name!: string;

  public website?: string | undefined;

  public photoUrl?: string | undefined;

  public jobs: Job[] = [];

  constructor(opts: IEmployerOpts) {
    Object.assign(this, opts);
  }
}
