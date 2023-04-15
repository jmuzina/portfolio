import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

export interface ToastOptions {
  detail: string;
  severity?: string;
  summary?: string;
  life?: number
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  constructor(private _ms: MessageService) {}

  private notify(opts: ToastOptions) : void {
    this._ms.add(opts);
  }

  public success(opts: ToastOptions) : void {
    opts.severity = 'success';
    this.notify(opts);
  }

  public info(opts: ToastOptions) : void {
    opts.severity = 'info';
    this.notify(opts);
  }

  public error(opts: ToastOptions) : void {
    opts.severity = 'error';
    this.notify(opts);
  }
}
