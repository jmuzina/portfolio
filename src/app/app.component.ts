import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'jm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public loading = true;

  private _fakeLoadingDelay = 500;

  ngOnInit(): void {
    this.fakeLoading();
  }

  private fakeLoading() : void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, this._fakeLoadingDelay);
  }

  constructor(public ths: ThemeService) { }
}
