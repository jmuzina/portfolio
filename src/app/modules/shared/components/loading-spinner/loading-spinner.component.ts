import { Component, Input } from '@angular/core';

@Component({
  selector: 'jm-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss'],
})
export class LoadingSpinnerComponent {
  @Input() message = 'Loading';

  @Input() showMessage = false;

  @Input() useDots = false;

  @Input() height = '7em';
}
