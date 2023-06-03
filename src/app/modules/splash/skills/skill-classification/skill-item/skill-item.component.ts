import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/classes/Skill';

@Component({
  selector: 'jm-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss'],
})
export class SkillItemComponent {
  @Input({ required: true }) skill!: Skill;
}
