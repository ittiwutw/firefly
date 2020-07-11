import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapListPage } from './map-list.page';

const routes: Routes = [
  {
    path: '',
    component: MapListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapListPageRoutingModule {}
