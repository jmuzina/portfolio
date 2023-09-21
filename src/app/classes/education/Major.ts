import { IMajorOpts } from 'src/app/interfaces/education/Major';

export class Major implements IMajorOpts {
  id!: number;

  label!: string;

  abbreviation!: string;

  constructor(opts: IMajorOpts) {
    Object.assign(this, opts);
  }
}
