import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/classes/skill.class';

@Component({
  selector: 'jm-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
})
export class SkillCardComponent {
  @Input({ required: true }) skill!: Skill;

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
}
