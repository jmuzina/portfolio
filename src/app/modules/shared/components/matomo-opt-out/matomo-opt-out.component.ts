import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { CookiesService } from '../../../../services/cookies.service';
import moment from 'moment';

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
  popupOpen = false;

  loading = false;

  optedOut = false;

  private _on: IOptOutState = { label: 'Enabled', value: 'on' };

  selected: IOptOutState = this._on;

  private _off: IOptOutState = { label: 'Disabled', value: 'off' };

  stateOptions: IOptOutState[] = [this._on, this._off];

  constructor(
    private _tsts: ToastService,
    private _cks: CookiesService,
  ) {}

  get optStateMessage(): string {
    if (this.optedOut) {
      return 'You are currently opted out of usage metrics tracking. I will not receive or store any of your usage data.';
    }
    return 'You are currently sharing usage data with me. I will use this data to make this site more intuitive and featured!';
  }

  handleChange(state: TOnOff) {
    if (state === 'off') {
      this._cks.trackerOptOut = moment(moment.now());
    } else {
      this._cks.trackerOptOut = null;
    }

    this.refreshState();
  }

  ngOnInit(): void {
    this.refreshState();
  }

  private async refreshState() {
    try {
      this.loading = true;
      this.optedOut = this._cks.isUserOptedOutOfTracking();
      this.selected = this.optedOut ? this._off : this._on;
    } catch (err: any) {
      console.error(err);
      this._tsts.error({ detail: err.message });
    } finally {
      this.loading = false;
    }
  }
}
