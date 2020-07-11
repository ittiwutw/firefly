import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllSurveyPageRoutingModule } from './all-survey-routing.module';

import { AllSurveyPage } from './all-survey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllSurveyPageRoutingModule
  ],
  declarations: [AllSurveyPage]
})
export class AllSurveyPageModule {}
