import { IPicture } from '../interfaces/Picture';
import { Duration } from './Duration';

export interface ISkillOpts {
  id: number;
  label: string;
  description?: string;
  picture?: IPicture;
  acquired_at: Date;
  highlighted?: boolean;
  classification?: ISkillClassificationOpts;
}

export interface ISkillClassificationOpts {
  id: number;
  label: string;
  picture?: IPicture;
  skills: ISkillOpts[];
}

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

  public duration!: Duration;

  public highlighted?: boolean;

  public classification!: SkillClassification;

  constructor(opts: ISkillOpts) {
    Object.assign(this, opts);
    this.acquired_at = new Date(this.acquired_at);
    this.duration = new Duration(this.acquired_at, new Date());
  }
}
