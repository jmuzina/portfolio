import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Employer } from '../classes/employment/Employer';
import { Job } from '../classes/employment/Job';
import { employerMappings } from '../constants/employer';

@Injectable({ providedIn: 'root' })
export class EmployerService extends GenericService {
  employers: Employer[] = employerMappings
    .map((mapping) => new Employer(mapping))
    .sort(Employer.Sort);

  jobs: Job[] = this.employers.reduce(
    (acc, employer) => [...acc, ...employer.jobs],
    new Array<Job>(),
  );

  constructor() {
    super();
    this.employers.forEach((employer) => {
      employer.jobs.forEach((job) => {
        job.employer = employer;
      });
    });
  }
}
