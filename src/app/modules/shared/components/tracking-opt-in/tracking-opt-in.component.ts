import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import moment from 'moment';
import { TrackingService } from '../../../../services/tracking.service';

type TOnOff = 'on' | 'off';

interface IOptInState {
  label: string;
  value: TOnOff;
  message: string;
}

@Component({
  selector: 'jm-tracking-opt-in',
  templateUrl: './tracking-opt-in.component.html',
  styleUrls: ['./tracking-opt-in.component.scss'],
})
export class TrackingOptInComponent implements OnInit {
  popupOpen = false;

  loading = false;

  optedIn = false;

  private _on: IOptInState = {
    label: 'Enabled',
    value: 'on',
    message:
      'You are currently sharing usage data with me. I will use this data to make this site more intuitive and featured.<br>You may turn this off at any time in this dialogue menu.',
  };

  private _off: IOptInState = {
    label: 'Disabled',
    value: 'off',
    message:
      'You are currently opted out of usage metrics tracking. I will not receive or store any of your usage data.',
  };

  selected: IOptInState = this._off;

  stateOptions: IOptInState[] = [this._on, this._off];

  constructor(
    private _tsts: ToastService,
    private _trks: TrackingService,
  ) {}

  handleChange(state: TOnOff) {
    if (state === 'off') {
      this._trks.trackerOptInDate = moment(moment.now());
    } else {
      this._trks.trackerOptInDate = null;
    }

    this._trks.trackerOptInDate = state === 'on' ? moment(moment.now()) : null;

    this.refreshState();
  }

  ngOnInit(): void {
    this.refreshState();
  }

  private refreshState() {
    try {
      this.loading = true;
      this.optedIn = this._trks.isUserOptedIntoTracking();
      this.selected = this.optedIn ? this._on : this._off;
    } catch (err: any) {
      console.error(err);
      this._tsts.error({ detail: err.message });
    } finally {
      this.loading = false;
    }
  }
}
