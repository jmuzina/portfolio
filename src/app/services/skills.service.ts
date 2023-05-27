/* eslint-disable import/no-extraneous-dependencies */
import { Injectable } from '@angular/core';
import { Skill } from '../classes/Skill';
import { GenericService } from './generic.service';
import { GraphQLService } from './graphql.service';
import { EnumType, jsonToGraphQLQuery } from 'json-to-graphql-query';

@Injectable({ providedIn: 'root' })
export class SkillsService extends GenericService {
  public skills: Skill[] = [];

  public async fetchSkills(): Promise<Skill[]> {
    const skillsQueryResult = await this._gqls.fetchGraphQL(jsonToGraphQLQuery({ query:{
      skills: {
        __aliasFor: 'jmuzina_Skill',
        __args: {
          order_by: [
            { sort_order: new EnumType('asc') },
            { label: new EnumType('asc') },
          ],
          where: {
            highlighted: { _eq: true },
            description: { _is_null: false },
          },
        },
        label: true,
        description: true,
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
    } }));

    const skills: Skill[] = skillsQueryResult.skills.map((rec: any) => new Skill(rec));

    return skills;
  }

  public override async onInitialized(): Promise<void> {
    this.skills = await this.fetchSkills();
  }

  constructor(private _gqls: GraphQLService) {
    super();
  }
}
