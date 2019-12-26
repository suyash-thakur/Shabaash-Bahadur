import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { IonicModule } from '@ionic/angular';

import { InfoPageRoutingModule } from './info-routing.module';

import { InfoPage } from './info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBhWMxmFDkRXW9OFmYd1eYPlaGmy5YcUCo',
      libraries: ['maps']
    })
  ],
  declarations: [InfoPage]
})
export class InfoPageModule {}
