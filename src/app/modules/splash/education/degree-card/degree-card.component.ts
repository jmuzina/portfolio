import { Component, Input } from '@angular/core';
import { Degree } from 'src/app/classes/education/Degree';

@Component({
  selector: 'jm-degree-card',
  templateUrl: './degree-card.component.html',
  styleUrls: ['./degree-card.component.scss'],
})
export class DegreeCardComponent {
  @Input({ required: true }) degree!: Degree;
}
