import { Injectable } from '@angular/core';
import { MaintenanceEvent } from '../classes/MaintenanceEvent';
import { GenericService } from './generic.service';

@Injectable({ providedIn: 'root' })
export class MaintenanceService extends GenericService {
  activeMaintenanceEvent?: MaintenanceEvent = undefined;

  constructor() {
    super();
  }
}
