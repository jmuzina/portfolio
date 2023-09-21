import { Job } from 'src/app/classes/employment/Job';

export interface IEmployerOpts {
  id: number;
  name: string;
  website?: string;
  photoUrl?: string;
  jobs: Job[];
}
