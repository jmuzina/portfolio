export interface IMaintenanceEventOpts {
  id: number;
  started_at: Date;
  ended_at?: Date;
  message?: string;
}

export class MaintenanceEvent implements IMaintenanceEventOpts {
  id!: number;

  started_at!: Date;

  ended_at?: Date;

  message?: string;

  constructor(opts: IMaintenanceEventOpts) {
    Object.assign(this, opts);
  }
}
