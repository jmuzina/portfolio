import { Job } from './Job';

export interface IEmployerOpts {
  id: number;
  name: string;
  website?: string;
  photoUrl?: string;
  jobs: Job[];
}

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
