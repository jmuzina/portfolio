import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StagingComponent } from './staging.component';
import { StagingRoutingModule } from './staging-routing.module';

@NgModule({
  declarations: [
    StagingComponent,
  ],
  imports: [
    CommonModule,
    StagingRoutingModule,
  ],
})
export class StagingModule { }
