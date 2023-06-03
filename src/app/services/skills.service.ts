import { Injectable } from '@angular/core';
import { SkillClassification } from '../classes/Skill';
import { GenericService } from './generic.service';
import { GraphQLService } from './graphql.service';
import { EnumType, jsonToGraphQLQuery } from 'json-to-graphql-query';

@Injectable({ providedIn: 'root' })
export class SkillsService extends GenericService {
  public classifications: SkillClassification[] = [];

  public async fetchSkillClassifications(): Promise<SkillClassification[]> {
    const queryResult: any = await this._gqls.fetchGraphQL(
      jsonToGraphQLQuery({
        query: {
          classifications: {
            __aliasFor: 'jmuzina_SkillClassification',
            __args: {
              order_by: [
                { sort_order: new EnumType('asc') },
                { label: new EnumType('asc') },
              ],
              where: {
                Skills: {
                  highlighted: { _eq: true },
                },
              },
            },
            label: true,
            picture: {
              icon: {
                __aliasFor: 'Icon',
                class: true,
              },
            },
            skills: {
              __aliasFor: 'Skills',
              __args: {
                order_by: [
                  { sort_order: new EnumType('asc') },
                  { label: new EnumType('asc') },
                ],
                where: { highlighted: { _eq: true } },
              },
              label: true,
              acquired_at: true,
              picture: {
                icon: {
                  class: true,
                },
                image: {
                  alt_text: true,
                  file: {
                    address: true,
                  },
                },
              },
            },
          },
        },
      })
    );
    const classifications: SkillClassification[] =
      queryResult.classifications.map(
        (classificationRec: any) => new SkillClassification(classificationRec)
      );

    return classifications;
  }

  public override async onInitialized(): Promise<void> {
    this.classifications = await this.fetchSkillClassifications();
  }

  constructor(private _gqls: GraphQLService) {
    super();
  }
}
