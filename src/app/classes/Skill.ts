import { IPicture } from '../interfaces/Picture';
import { ISkillClassificationOpts, ISkillOpts } from '../interfaces/employment/Skill';

export class SkillClassification implements ISkillClassificationOpts {
  public id!: number;

  public label!: string;

  public picture?: IPicture;

  public skills: Skill[] = [];

  constructor(opts: ISkillClassificationOpts) {
    Object.assign(this, opts);
  }
}

export class Skill implements ISkillOpts {
  public id!: number;

  public label!: string;

  public picture?: IPicture;

  public description?: string;

  public acquired_at!: Date;

  public highlighted?: boolean;

  public classification!: SkillClassification;

  constructor(opts: ISkillOpts) {
    Object.assign(this, opts);
    this.acquired_at = new Date(this.acquired_at);
  }
}
