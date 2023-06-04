export interface IMaintenanceEventOpts {
  id: number;
  started_at: Date;
  ended_at?: Date;
  message?: string;
}

export class MaintenanceEvent implements IMaintenanceEventOpts {
  public id!: number;

  public started_at!: Date;

  public ended_at?: Date;

  public message?: string;

  constructor(opts: IMaintenanceEventOpts) {
    Object.assign(this, opts);
  }
}
