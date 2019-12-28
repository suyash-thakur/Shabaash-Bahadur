import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {FirebaseModule, FirebaseProvider} from 'angular-firebase'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {SocialLoginModule, AuthServiceConfig, GoogleLoginProvider} from 'angularx-social-login';
import { getAuthServiceConfigs } from './socialLoginConfig';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { InAppBrowser, InAppBrowserEvent } from '@ionic-native/in-app-browser/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SocialLoginModule, HttpClientModule, FirebaseModule,
    FormsModule, ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBhWMxmFDkRXW9OFmYd1eYPlaGmy5YcUCo',
      libraries: ['maps']
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    InAppBrowser,
    {provide: AuthServiceConfig, useFactory: getAuthServiceConfigs},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
