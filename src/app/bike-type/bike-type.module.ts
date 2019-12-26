import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikeTypePageRoutingModule } from './bike-type-routing.module';

import { BikeTypePage } from './bike-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikeTypePageRoutingModule
  ],
  declarations: [BikeTypePage]
})
export class BikeTypePageModule {}
