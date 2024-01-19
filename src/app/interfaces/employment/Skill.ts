import { IPicture } from '../Picture';

export interface ISkillOpts {
  label: string;
  description?: string;
  picture?: IPicture;
  acquired_at: string;
  classification?: ISkillClassificationOpts;
}

export interface ISkillClassificationOpts {
  label: string;
  picture?: IPicture;
  skills: ISkillOpts[];
}
