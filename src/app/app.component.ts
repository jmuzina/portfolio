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
    this.inits.initialize().finally(() => {
      this.loading = false;
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
