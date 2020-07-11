import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapListPageRoutingModule } from './map-list-routing.module';

import { MapListPage } from './map-list.page';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapListPageRoutingModule,
    AgmCoreModule
  ],
  declarations: [MapListPage]
})
export class MapListPageModule {}
