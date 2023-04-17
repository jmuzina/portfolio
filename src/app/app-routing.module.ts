import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'coming-soon',
    //loadChildren: () => import('./modules/splash/splash.module').then(m => m.SplashModule),
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('./modules/staging/staging.module').then(m => m.StagingModule),
  },
  {
    path: '**',
    component:PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
