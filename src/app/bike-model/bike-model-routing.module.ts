import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikeModelPage } from './bike-model.page';

const routes: Routes = [
  {
    path: '',
    component: BikeModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeModelPageRoutingModule {}
