import { Injectable } from '@angular/core';
import { Skill } from '../classes/skill.class';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  public skills: Skill[] = [
    new Skill({
      label: 'Angular',
      image:  `${environment.appUrl}/assets/images/angular_logo.png`,
      description: 'Developing elegant, intuitive applications using Typescript, HTML, & SCSS',
      duration: '1 year',
    }),
    new Skill({
      label: 'SQL',
      image: `${environment.appUrl}/assets/images/postgres_logo.png`,
      description: 'Designing, implementing, and maintaining performant relational databases with MySQL and PostgreSQL',
      duration: '6 years',
    }),
    new Skill({
      label: 'Node',
      image: `${environment.appUrl}/assets/images/nodejs_logo.png`,
      description: 'Creating APIs and webhooks with NodeJS and TSNode, as well as serverside-rendered web applications',
      duration: '4 years',
    }),
    new Skill({
      label: 'Python',
      image: `${environment.appUrl}/assets/images/python_logo.png`,
      description: 'Data ingestion and processing scripts, Flask web applications, machine-learning, and Flask web applications',
      duration: '5 years',
    }),
    new Skill({
      label: 'DevOps',
      icon: { iconCode: 'fa fa-light fa-gears fa-2xl' },
      description: 'Setting up and maintaining robust application deployment pipelines with AWS, Azure, GitHub, and GitLab',
      duration: '1 year',
    }),
  ];
}
