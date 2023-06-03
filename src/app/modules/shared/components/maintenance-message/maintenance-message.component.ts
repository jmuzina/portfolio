import { Component, Input } from '@angular/core';
import { MaintenanceEvent } from 'src/app/classes/MaintenanceEvent';

@Component({
  selector: 'jm-maintenance-message',
  templateUrl: './maintenance-message.component.html',
  styleUrls: ['./maintenance-message.component.scss'],
})
export class MaintenanceMessageComponent {
  @Input({ required: true }) event!: MaintenanceEvent;
}
