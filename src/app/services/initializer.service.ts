import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { SkillsService } from './skills.service';

@Injectable({ providedIn: 'root' })
export class InitializerService extends GenericService {
  public override async initialize() {
    return Promise.all([this._sks].map((service: GenericService) => service.initialize()));
  }

  public override async onInitialized(): Promise<void> {
    return super.initialize();
  }

  constructor(private _sks: SkillsService) {
    super();
  }
}
