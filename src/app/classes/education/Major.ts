import { IMajorOpts } from 'src/app/interfaces/education/Major';

export class Major implements IMajorOpts {
  label!: string;

  constructor(opts: IMajorOpts) {
    Object.assign(this, opts);
  }
}
