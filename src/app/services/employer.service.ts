import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Employer } from '../classes/Employer';
import { GraphQLService } from './graphql.service';
import { jsonToGraphQLQuery } from 'json-to-graphql-query';

@Injectable({ providedIn: 'root' })
export class EmployerService extends GenericService {
  public employers: Employer[] = [];

  public override async initialize(): Promise<any> {
    this.employers = await this.fetchEmployers();
    return super.initialize();
  }

  public async fetchEmployers(): Promise<Employer[]> {
    const employerQueryReturn = await this._gqls.fetchGraphQL(
      jsonToGraphQLQuery({
        query: {
          employers: {
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
            __aliasFor: 'jmuzina_Employer',
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

  constructor(private _gqls: GraphQLService) {
    super();
  }
}
