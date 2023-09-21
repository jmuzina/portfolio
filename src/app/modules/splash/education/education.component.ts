import { Component } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'jm-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  constructor(public edus: EducationService) {}
}
