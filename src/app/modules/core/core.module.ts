import { NgModule, ModuleWithProviders } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { ThemeService } from 'src/app/services/theme.service';

@NgModule({
  declarations: [

  ],
  imports: [

  ],
  providers: [
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [CookieService, MessageService, ThemeService],
    };
  }
}
