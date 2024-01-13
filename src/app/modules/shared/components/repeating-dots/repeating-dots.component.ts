import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'jm-repeating-dots',
  templateUrl: './repeating-dots.component.html',
  styleUrls: ['./repeating-dots.component.scss'],
})
export class RepeatingDotsComponent implements OnInit, OnDestroy {
  @Input() maxDots = 5;

  @Input() dotInterval = 250;

  @Input() dotStr = '.';

  private _numDots = 0;

  dotsToDisplay = '';

  private _timer: number | undefined = undefined;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._timer = window.setInterval(
      () => this.progressDots(),
      this.dotInterval,
    );
  }

  ngOnDestroy(): void {
    clearInterval(this._timer);
  }

  private repeatedDotsString(): string {
    let result = '';
    for (let i = 0; i < this._numDots; ++i) {
      result += this.dotStr;
    }
    return result;
  }

  private progressDots(): void {
    this._numDots += 1;
    if (this._numDots >= this.maxDots) this._numDots = 0;
    this.dotsToDisplay = this.repeatedDotsString();
  }
}
