import { Component } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { EmployerService } from 'src/app/services/employer.service';

@Component({
  selector: 'jm-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  constructor(
    public emps: EmployerService,
    public edus: EducationService,
  ) {}
}
