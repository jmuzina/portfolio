export interface IEmployerOpts {
  name: string;
  website?: string;
  photoUrl?: string;
}

export class Employer implements IEmployerOpts {
  public name!: string;

  public website?: string | undefined;

  public photoUrl?: string | undefined;

  constructor(opts: IEmployerOpts) {
    Object.assign(this, opts);
  }
}
