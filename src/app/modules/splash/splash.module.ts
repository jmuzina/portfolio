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

@NgModule({
  declarations: [
    SplashComponent,
    GreetingComponent,
    SkillsComponent,
    SkillClassificationComponent,
    SkillItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    SplashRoutingModule,
    ImageModule,
    GalleriaModule,
  ],
})
export class SplashModule {}
