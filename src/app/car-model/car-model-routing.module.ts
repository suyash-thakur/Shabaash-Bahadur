import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarModelPage } from './car-model.page';

const routes: Routes = [
  {
    path: '',
    component: CarModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarModelPageRoutingModule {}
