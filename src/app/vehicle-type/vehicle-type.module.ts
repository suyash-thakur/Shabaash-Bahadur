import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleTypePageRoutingModule } from './vehicle-type-routing.module';

import { VehicleTypePage } from './vehicle-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleTypePageRoutingModule
  ],
  declarations: [VehicleTypePage]
})
export class VehicleTypePageModule {}
