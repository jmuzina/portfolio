import { IICon } from '../interfaces/icon.interface';
import { IImage } from '../interfaces/image.interface';

export class Skill {
  public label!: string;

  //public images: IImage[] = [];

  public image?: string;

  public icon?: IICon;

  public description!: string;

  public duration!: string;

  constructor(opts: Partial<Skill>) {Object.assign(this, opts);}
}
