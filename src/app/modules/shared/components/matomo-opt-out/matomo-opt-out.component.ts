import { Component, OnInit } from '@angular/core';
import { MatomoTracker } from '@ngx-matomo/tracker';
import { ToastService } from 'src/app/services/toast.service';

type TOnOff = 'on' | 'off';

interface IOptOutState {
  label: string;
  value: TOnOff;
}

@Component({
  selector: 'jm-matomo-opt-out',
  templateUrl: './matomo-opt-out.component.html',
  styleUrls: ['./matomo-opt-out.component.scss'],
})
export class MatomoOptOutComponent implements OnInit {
  public popupOpen = false;

  private _on: IOptOutState = { label: 'Enabled', value: 'on' };

  private _off: IOptOutState = { label: 'Disabled', value: 'off' };

  public selected: IOptOutState = this._on;

  public loading = false;

  public optedOut = false;

  public stateOptions: IOptOutState[] = [this._on, this._off];

  handleChange(state: TOnOff) {
    if (state === 'off') {
      this.tracker.optUserOut();
    } else {
      this.tracker.forgetUserOptOut();
    }
    window.location.reload();

    this.refreshState();
  }

  private async refreshState() {
    try {
      this.loading = true;
      this.optedOut = await this.tracker.isUserOptedOut();
      this.selected = this.optedOut ? this._off : this._on;
    } catch (err: any) {
      console.error(err);
      this._tsts.error({ detail: err.message });
    } finally {
      this.loading = false;
    }
  }

  public get optStateMessage(): string {
    if (this.optedOut) {
      return 'You are currently opted out of usage metrics tracking. I will not receive or store any of your usage data.';
    }
    return 'You are currently sharing usage data with me. I will use this data to make this site more intuitive and featured!';
  }

  ngOnInit(): void {
    this.refreshState();
  }

  constructor(
    private readonly tracker: MatomoTracker,
    private _tsts: ToastService,
  ) {}
}
