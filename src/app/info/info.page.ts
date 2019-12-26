import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { PaymentModel } from '../Model/payment-model';
import { AgmMap } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import * as sha512 from 'js-sha512';


@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  date: Date;
  title = 'AGM project';
  latitude: number;
  longitude: number;
  encrypt: any;
  zoom: number;
  paymentModel: PaymentModel = new PaymentModel();
 token = {

 };


  constructor(private authService: AuthenticationService, private http: HttpClient, private iab: InAppBrowser) { }

  ngOnInit() {
    this.setCurrentLocation();
  }
  paynow(VehicleNum, whatsApp) {
    this.authService.authData.whatsApp = whatsApp;
    this.authService.authData.registrationNumber = VehicleNum;
    this.authService.authData.startDate = this.date;
    const name = '';
    const mobile = '';
    const email = '';
    const bookingId = String(Math.floor(Math.random() * (99 - 10 + 1) + 10)) + String(1235);
    const productInfo = 'this is testing';
    const salt = 'BWxQfOQdtJ';
    const key = 'Sn6dyVBD';
    const amt = '100';
    const surl = 'http://localhost:8100';
    const furl = 'http://localhost:8100/info';
    const service_provider = 'payu_paisa';
    const udf1 = '';
    const udf2 = '';
    const udf3 = '';
    const udf4 = '';
    const udf5 = '';
    const udf6 = '';
    const udf7 = '';
    const udf8 = '';
    const udf9 = '';
    const udf10 = '';

    const string = key + '|' + bookingId + '|' + amt + '|' + productInfo + '|' + name + '|' + email + '|' + udf1 + '|'
     + udf2 + '|' + udf3 + '|' + udf4 + '|' + udf5 + '|' + udf6 + '|' + udf7 + '|' + udf8 + '|' + udf9 + '|' + udf10 + '|' + salt;
    
    this.encrypt = sha512.sha512(string);

    const url = 'secure.payu.in/_payment?amt=' + amt + '&service_provider=' + service_provider +
    '&name=' + name + '&surl=' + surl + '&furl=' + furl + '&mobileNo=' + mobile + '&email=' + email +
    '&bookingId' + bookingId + '&productinfo=' + productInfo + '&hash=' + this.encrypt + +'&salt=' + salt + '&key=' + key;

    let options: InAppBrowserOptions = {
      location: 'yes',
      clearcache: 'yes',
      zoom: 'yes',
      toolbar: 'no',
      closebuttoncaption: 'back'
    };

    const browser: any = this.iab.create(url, '_blank', options);



    console.log(this.authService.authData);

  }
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }
}
