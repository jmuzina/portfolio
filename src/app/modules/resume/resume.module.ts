import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ResumeRoutingodule } from './resume-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ResumeComponent,
  ],
  imports: [
    CommonModule,
    ResumeRoutingodule,
    SharedModule,
  ],
})
export class ResumeModule { }
