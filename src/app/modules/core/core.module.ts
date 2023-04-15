import { NgModule, ModuleWithProviders } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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
      providers: [CookieService, MessageService, ThemeService, ConfirmationService],
    };
  }
}
