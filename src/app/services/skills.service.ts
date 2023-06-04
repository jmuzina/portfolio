import { Injectable } from '@angular/core';
import { Skill, SkillClassification } from '../classes/Skill';
import { GenericService } from './generic.service';
import { GraphQLService } from './graphql.service';
import { EnumType, jsonToGraphQLQuery } from 'json-to-graphql-query';

@Injectable({ providedIn: 'root' })
export class SkillsService extends GenericService {
  public classifications: SkillClassification[] = [];

  public skills: Skill[] = [];

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
            },
            id: true,
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
              },
              id: true,
              label: true,
              acquired_at: true,
              highlighted: true,
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

    this.skills = [];

    classifications.forEach((classification: SkillClassification) => {
      classification.skills.forEach((skill: Skill) => {
        skill.classification = classification;
        this.skills.push(skill);
      });
    });

    return classifications;
  }

  public override async initialize(): Promise<void> {
    this.classifications = await this.fetchSkillClassifications();
    return super.initialize();
  }

  public getSkill(id: number): Skill | undefined {
    return this.skills.find((skill: Skill) => skill.id === id);
  }

  constructor(private _gqls: GraphQLService) {
    super();
  }
}
