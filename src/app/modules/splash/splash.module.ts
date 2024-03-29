import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash.component';
import { SplashRoutingModule } from './splash-routing.module';
import { GreetingComponent } from './greeting/greeting.component';
import { SkillsComponent } from './skills/skills.component';
import { ImageModule } from 'primeng/image';
import { GalleriaModule } from 'primeng/galleria';
import { SharedModule } from '../shared/shared.module';
import { SkillClassificationComponent } from './skills/skill-classification/skill-classification.component';
import { SkillItemComponent } from './skills/skill-classification/skill-item/skill-item.component';
import { ResumeComponent } from './resume/resume.component';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ProjectsComponent } from './projects/projects.component';
import { JobCardComponent } from './resume/job-card/job-card.component';
import { EducationComponent } from './education/education.component';
import { DegreeCardComponent } from './education/degree-card/degree-card.component';

@NgModule({
  declarations: [
    SplashComponent,
    GreetingComponent,
    SkillsComponent,
    SkillClassificationComponent,
    SkillItemComponent,
    ResumeComponent,
    ProjectsComponent,
    JobCardComponent,
    EducationComponent,
    DegreeCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TimelineModule,
    CardModule,
    SplashRoutingModule,
    ImageModule,
    GalleriaModule,
  ],
})
export class SplashModule {}
