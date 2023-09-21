import { IPicture } from '../Picture';

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
