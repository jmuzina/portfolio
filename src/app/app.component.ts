import { Component, OnInit } from '@angular/core';
import { InitializerService } from './services/initializer.service';
import { ToastService } from './services/toast.service';
import { MaintenanceService } from './services/maintenance.service';

@Component({
  selector: 'jm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public loading = true;

  private async initializeApp() {
    try {
      await this._init.initialize();
    } catch (err) {
      console.error(err);
      this._tsts.error({
        summary: 'App initialization failed',
        detail: 'Something went wrong while initializing the portfolio.',
      });
    } finally {
      this.loading = false;
    }
  }

  ngOnInit(): void {
    this.initializeApp();
  }

  constructor(
    private _init: InitializerService,
    private _tsts: ToastService,
    public mnts: MaintenanceService
  ) {}
}
