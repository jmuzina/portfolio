import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash.component';
import { SplashRoutingModule } from './splash-routing.module';
import { GreetingComponent } from './greeting/greeting.component';
import { SkillsComponent } from './skills/skills.component';
import { ImageModule } from 'primeng/image';
import { SkillCardComponent } from './skills/skill-card/skill-card.component';
import { GalleriaModule } from 'primeng/galleria';


@NgModule({
  declarations: [
    SplashComponent,
    GreetingComponent,
    SkillsComponent,
    SkillCardComponent,
  ],
  imports: [
    CommonModule,
    SplashRoutingModule,
    ImageModule,
    GalleriaModule,
  ],
})
export class SplashModule { }
