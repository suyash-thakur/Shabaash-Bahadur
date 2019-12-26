import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarModelPageRoutingModule } from './car-model-routing.module';

import { CarModelPage } from './car-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarModelPageRoutingModule
  ],
  declarations: [CarModelPage]
})
export class CarModelPageModule {}
