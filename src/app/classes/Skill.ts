import { IPicture } from '../interfaces/Picture';
import { Duration } from './Duration';

export interface ISkillOpts {
  label: string;
  description?: string;
  picture?: IPicture;
  acquired_at: Date;
}

export interface ISkillClassificationOpts {
  label: string;
  picture?: IPicture;
  skills: ISkillOpts[];
}

export class SkillClassification implements ISkillClassificationOpts {
  public label!: string;

  public picture?: IPicture;

  public skills: Skill[] = [];

  constructor(opts: ISkillClassificationOpts) {
    Object.assign(this, opts);
  }
}

export class Skill implements ISkillOpts {
  public label!: string;

  public picture?: IPicture;

  public description?: string;

  public acquired_at!: Date;

  public duration!: Duration;

  constructor(opts: ISkillOpts) {
    Object.assign(this, opts);
    this.acquired_at = new Date(this.acquired_at);
    this.duration = new Duration(this.acquired_at, new Date());
  }
}
