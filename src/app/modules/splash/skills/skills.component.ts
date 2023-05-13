import { Component } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'jm-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  constructor(public sks: SkillsService) {}
}
