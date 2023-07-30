import { Component, OnInit } from '@angular/core';
import { InitializerService } from './services/initializer.service';
import { ToastService } from './services/toast.service';
import { MaintenanceService } from './services/maintenance.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'jm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public loading = true;

  public ignoreMaintenance = environment.ignoreMaintenance;

  private async initializeApp() {
    this.inits.initialize().finally(() => {
      this.loading = false;
      if (this.mnts.activeMaintenanceEvent && this.ignoreMaintenance) {
        this._tsts.info({
          summary: 'Maintenance in progress',
          detail: this.mnts.activeMaintenanceEvent.message || 'Maintenance in progress.',
          life: 60000,
        });
      }
    });
  }

  ngOnInit(): void {
    this.initializeApp();
  }

  constructor(
    public inits: InitializerService,
    private _tsts: ToastService,
    public mnts: MaintenanceService,
  ) {}
}
