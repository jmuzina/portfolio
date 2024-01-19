import { IJobOpts } from './Job';

export interface IEmployerOpts {
  name: string;
  website?: string;
  photoUrl?: string;
  jobs: IJobOpts[];
}
