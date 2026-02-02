import { Injectable } from '@angular/core';
import { MaintenanceEvent } from '../classes/MaintenanceEvent';
import { GenericService } from './generic.service';

@Injectable({ providedIn: 'root' })
export class MaintenanceService extends GenericService {
  activeMaintenanceEvent?: MaintenanceEvent = {
    id: 0,
    started_at: new Date(2026, 2, 1, 0, 0, 0),
    // ended_at: new Date(2026, 2, 1, 6, 0, 0),
    message: 'Something better is coming...',
  };

  constructor() {
    super();
  }
}
