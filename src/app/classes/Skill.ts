import { IPicture } from '../interfaces/Picture';
import {
  ISkillClassificationOpts,
  ISkillOpts,
} from '../interfaces/employment/Skill';

export class SkillClassification {
  id!: number;

  label!: string;

  picture?: IPicture;

  skills: Skill[] = [];

  constructor(opts: ISkillClassificationOpts) {
    Object.assign(this, opts);
  }
}

export class Skill {
  id!: number;

  label!: string;

  picture?: IPicture;

  description?: string;

  acquired_at!: Date;

  highlighted?: boolean;

  public classification!: SkillClassification;

  constructor(opts: ISkillOpts) {
    Object.assign(this, opts);
    this.acquired_at = new Date(this.acquired_at);
  }
}
