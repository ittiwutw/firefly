import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'survey-list',
    pathMatch: 'full'
  },
  {
    path: 'survey-list',
    loadChildren: () => import('./survey-list/survey-list.module').then( m => m.SurveyListPageModule)
  },
  {
    path: 'add-survey',
    loadChildren: () => import('./add-survey/add-survey.module').then( m => m.AddSurveyPageModule)
  },
  {
    path: 'survey-detail',
    loadChildren: () => import('./survey-detail/survey-detail.module').then( m => m.SurveyDetailPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'all-survey',
    loadChildren: () => import('./all-survey/all-survey.module').then( m => m.AllSurveyPageModule)
  },
  {
    path: 'map-list',
    loadChildren: () => import('./map-list/map-list.module').then( m => m.MapListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
