import { Component, Input } from '@angular/core';
import { Job } from 'src/app/classes/Job';

@Component({
  selector: 'jm-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent {
  @Input({ required: true }) job!: Job;

  public abbreviatedJobDescriptionMaxLength = 3;

  public showMore = false;
}
