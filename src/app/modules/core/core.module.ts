import { NgModule, ModuleWithProviders } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ThemeService } from 'src/app/services/theme.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
  ],
  providers: [
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [MessageService, ThemeService, ConfirmationService],
    };
  }
}
