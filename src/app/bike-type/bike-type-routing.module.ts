import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikeTypePage } from './bike-type.page';

const routes: Routes = [
  {
    path: '',
    component: BikeTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeTypePageRoutingModule {}
