import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Employer } from '../classes/employment/Employer';
import { GraphQLService } from './graphql.service';
import { EnumType, jsonToGraphQLQuery } from 'json-to-graphql-query';
import { SkillsService } from './skills.service';
import { Job } from '../classes/employment/Job';

@Injectable({ providedIn: 'root' })
export class EmployerService extends GenericService {
  public employers: Employer[] = [];

  public jobs: Job[] = [];

  public override async initialize(): Promise<any> {
    this.employers = await this.fetchEmployers();
    this.jobs = await this.fetchJobs();

    return super.initialize();
  }

  public async fetchEmployers(): Promise<Employer[]> {
    const employerQueryReturn = await this._gqls.fetchGraphQL(
      jsonToGraphQLQuery({
        query: {
          employers: {
            __aliasFor: 'portfolio_Employer',
            __args: {
              where: {
                Jobs_aggregate: {
                  count: {
                    predicate: {
                      _gt: 0,
                    },
                  },
                },
              },
            },
            id: true,
            name: true,
            Image: {
              alt_text: true,
              file: {
                address: true,
              },
            },
          },
        },
      }),
    );

    const employers: Employer[] = employerQueryReturn.employers.map(
      (employerRecord: any) => new Employer(employerRecord),
    );

    return employers;
  }

  public async fetchJobs(): Promise<Job[]> {
    const jobsQueryReturn = await this._gqls.fetchGraphQL(
      jsonToGraphQLQuery({
        query: {
          jobs: {
            __aliasFor: 'portfolio_Job',
            __args: {
              order_by: [
                { started_at: new EnumType('desc') },
                { ended_at: new EnumType('desc') },
              ],
            },
            id: true,
            title: true,
            started_at: true,
            ended_at: true,
            employer_id_fk: true,
            /*  skills: {
              __aliasFor: 'job_leverages_skills',
              __args: {
                order_by: [
                  { Skill: { sort_order: new EnumType('asc') } },
                  { Skill: { label: new EnumType('asc') } },
                ],
              },
              skill_id_fk: true,
            }, */
            responsibilities: {
              __aliasFor: 'job_has_responsibilities',
              __args: {
                order_by: {
                  Responsibility: {
                    sort_order: new EnumType('asc'),
                  },
                },
              },
              Responsibility: {
                text: true,
              },
            },
          },
        },
      }),
    );
    const jobs: Job[] = jobsQueryReturn.jobs.map((jobRec: any) => {
      jobRec.employer = this.getEmployer(jobRec.employer_id_fk);
      jobRec.responsibilities = jobRec.responsibilities.map(
        (mapping: any) => mapping.Responsibility,
      );
      delete jobRec.employer_id_fk;
      const job: Job = new Job(jobRec);
      job.employer.jobs.push(job);
      return job;
    });
    return jobs;
  }

  public getEmployer(id: number): Employer | undefined {
    return this.employers.find((employer: Employer) => employer.id === id);
  }

  constructor(private _gqls: GraphQLService, private _sks: SkillsService) {
    super();
  }
}
