import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { SkillsService } from './skills.service';
import { ToastService } from './toast.service';
import { MaintenanceService } from './maintenance.service';
import { ThemeService } from './theme.service';
import { environment } from 'src/environments/environment';
import { EmployerService } from './employer.service';

@Injectable({ providedIn: 'root' })
export class InitializerService extends GenericService {
  public initializationError?: Error | null = null;

  public override async initialize(): Promise<void> {
    return this._mnts.initialize()
      .then(() => Promise.all([this._sks, this._ths].map((svc: GenericService) => svc.initialize())))
      .then(() => this._emps.initialize())
      .catch((err) => {
        console.error(err);
        this.initializationError = <Error>err;
        if (!environment.production)
          this._tsts.error({
            summary: 'Failed to initialize data',
            detail: this.initializationError.message,
          });
      });

  }

  public override async onInitialized(): Promise<void> {
    return super.initialize();
  }

  constructor(
    private _tsts: ToastService,
    private _sks: SkillsService,
    private _mnts: MaintenanceService,
    private _ths: ThemeService,
    private _emps: EmployerService,
  ) {
    super();
  }
}
