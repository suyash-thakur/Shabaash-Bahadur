import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BikeModelPageRoutingModule } from './bike-model-routing.module';

import { BikeModelPage } from './bike-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BikeModelPageRoutingModule
  ],
  declarations: [BikeModelPage]
})
export class BikeModelPageModule {}
