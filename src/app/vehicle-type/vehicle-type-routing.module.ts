import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleTypePage } from './vehicle-type.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleTypePageRoutingModule {}
