import { Component, Input } from '@angular/core';
import { SkillClassification } from 'src/app/classes/Skill';

@Component({
  selector: 'jm-skill-classification',
  templateUrl: './skill-classification.component.html',
  styleUrls: ['./skill-classification.component.scss'],
})
export class SkillClassificationComponent {
  @Input({ required: true }) classification!: SkillClassification;
}
