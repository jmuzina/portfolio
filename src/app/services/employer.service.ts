import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Employer } from '../classes/employment/Employer';
import { Job } from '../classes/employment/Job';
import { employerMappings } from '../constants/employer';
import moment from 'moment';

@Injectable({ providedIn: 'root' })
export class EmployerService extends GenericService {
  employers: Employer[] = [];

  jobs: Job[] = [];

  constructor() {
    super();
    this.employers = employerMappings
      .map((mapping) => new Employer(mapping))
      .map(employer => ({
        ...employer,
        jobs: employer.jobs.filter(job =>
          job.started_at.isBefore(moment.now())
        )
          .sort(Job.Sort)
          .map(job => ({ ...job, employer }))
      }))
      .filter(employer => employer.jobs.length)
      .sort(Employer.Sort);
    this.jobs = this.employers.reduce(
      (acc, employer) => [...acc, ...employer.jobs], new Array<Job>()
    );
  }
}

