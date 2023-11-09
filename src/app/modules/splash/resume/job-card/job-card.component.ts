import { Component, Input } from '@angular/core';
import { Job } from 'src/app/classes/employment/Job';

@Component({
  selector: 'jm-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent {
  @Input({ required: true }) job!: Job;

  @Input() futureDateText = 'Present';

  public abbreviatedJobDescriptionMaxLength = 3;

  public showMore = false;
}
