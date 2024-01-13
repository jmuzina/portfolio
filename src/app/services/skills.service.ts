import { Injectable } from '@angular/core';
import { Skill, SkillClassification } from '../classes/Skill';
import { GenericService } from './generic.service';
import { skillClassificationMappings } from '../constants/skills';

@Injectable({ providedIn: 'root' })
export class SkillsService extends GenericService {
  classifications: SkillClassification[] = [];

  skills: Skill[] = [];

  constructor() {
    super();
  }

  async fetchSkillClassifications(): Promise<SkillClassification[]> {
    const classifications: SkillClassification[] =
      skillClassificationMappings.map(
        (mapping) => new SkillClassification(mapping),
      );

    classifications.forEach((classification: SkillClassification) => {
      classification.skills.forEach((skill: Skill) => {
        skill.classification = classification;
        this.skills.push(skill);
      });
    });

    return classifications;
  }

  override async initialize(): Promise<void> {
    this.classifications = await this.fetchSkillClassifications();
    return super.initialize();
  }

  getSkill(id: number): Skill | undefined {
    return this.skills.find((skill: Skill) => skill.id === id);
  }
}
