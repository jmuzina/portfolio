import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { SkillsService } from './skills.service';
import { ToastService } from './toast.service';
import { EmployerService } from './Employer.service';

@Injectable({ providedIn: 'root' })
export class InitializerService extends GenericService {
  public override async initialize(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        await Promise.all(
          [this._sks].map((service: GenericService) => service.initialize())
        );
        resolve();
      } catch (err) {
        this._tsts.error({
          summary: 'Failed to initialize data',
          detail: 'An error occurred while querying for portfolio data.',
        });
        reject(err);
      }
    });
  }

  public override async onInitialized(): Promise<void> {
    return super.initialize();
  }

  constructor(
    private _tsts: ToastService,
    private _sks: SkillsService,
    private _emps: EmployerService
  ) {
    super();
  }
}
