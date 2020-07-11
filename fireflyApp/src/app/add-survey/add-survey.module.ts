import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSurveyPageRoutingModule } from './add-survey-routing.module';

import { AddSurveyPage } from './add-survey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSurveyPageRoutingModule
  ],
  declarations: [AddSurveyPage]
})
export class AddSurveyPageModule {}
