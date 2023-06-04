import { Injectable } from '@angular/core';
import { GraphQLService } from './graphql.service';
import { EnumType, jsonToGraphQLQuery } from 'json-to-graphql-query';
import { MaintenanceEvent } from '../classes/MaintenanceEvent';
import { GenericService } from './generic.service';

@Injectable({ providedIn: 'root' })
export class MaintenanceService extends GenericService {
  public activeMaintenanceEvent?: MaintenanceEvent;

  public async getActiveMaintenanceEvent(): Promise<MaintenanceEvent> {
    const queryResult: any = await this._gqls.fetchGraphQL(
      jsonToGraphQLQuery({
        query: {
          maintEvents: {
            __aliasFor: 'maint_MaintenanceEvent',
            __args: {
              order_by: {
                started_at: new EnumType('asc'),
              },
              limit: 1,
              where: {
                _and: [
                  { started_at: { _lte: 'now()' } },
                  {
                    _or: [
                      {
                        ended_at: { _is_null: true },
                      },
                      { ended_at: { _gt: 'now()' } },
                    ],
                  },
                ],
              },
            },
            id: true,
            started_at: true,
            message: true,
          },
        },
      }),
    );

    const events: MaintenanceEvent[] = queryResult.maintEvents.map(
      (evtRec: any) => new MaintenanceEvent(evtRec),
    );
    const result: MaintenanceEvent = events[0];

    return result;
  }

  public override async initialize(): Promise<any> {
    this.activeMaintenanceEvent = await this.getActiveMaintenanceEvent();
    return super.initialize();
  }

  constructor(private _gqls: GraphQLService) {
    super();
  }
}
