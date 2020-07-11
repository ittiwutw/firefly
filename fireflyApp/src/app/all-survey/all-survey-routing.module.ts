import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllSurveyPage } from './all-survey.page';

const routes: Routes = [
  {
    path: '',
    component: AllSurveyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllSurveyPageRoutingModule {}
