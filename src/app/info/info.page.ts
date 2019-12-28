import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { PaymentModel } from '../Model/payment-model';
import { AgmMap } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { InAppBrowser, InAppBrowserEvent, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import * as sha512 from 'js-sha512';
import { Router } from '@angular/router';


@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  date: Date;
  title = 'AGM project';
  paymentString: any;
  latitude: number;
  longitude: number;
  amount: String;
  encrypt: any;
  name: any;


  show = false;
  txnid = Math.random() * 100;

  zoom: number;
  paymentModel: PaymentModel = new PaymentModel();
 token = {

 };
  email: any;
  txnId: any;
  password: any;
  vehicleType: any;
  phone: any;
  company: any;
  registrationNumber: any;
  whatsApp: any;
  startDate: any;
  address: any;


  constructor(private authService: AuthenticationService, private http: HttpClient, private iab: InAppBrowser,
              public platform: Platform, public router: Router) { }

  ngOnInit() {
    if (this.authService.authData.vechileType === 'bike') {
      this.amount = '149';
    } else {
      this.amount = '299';
    }
    this.name = this.authService.authData.name,
    this.email = this.authService.authData.email,
    this.password = this.authService.authData.password,
    this.vehicleType = this.authService.authData.vechileType,
    this.phone = this.authService.authData.phone,
    this.company = this.authService.authData.company,
    this.registrationNumber = this.authService.authData.registrationNumber,
    this.whatsApp = this.authService.authData.whatsApp,
    this.startDate = this.authService.authData.startDate,
    this.txnId = this.authService.authData.txnId;
  }

  paynow(VehicleNum, whatsApp) {
    this.authService.authData.whatsApp = whatsApp;
    this.authService.authData.registrationNumber = VehicleNum;
    this.startDate = this.date;

    const info: any = {
      name: 'name',
      email: 'suyashthakur@gmail.com',
      amount: this.amount,
      phone: '9521408369',
      txnid: this.txnid
    };
    const user: any = {
      name: this.name,
      email: this.email,
      password: this.password,
      vehicleType: this.vehicleType,
      phone: this.phone,
      company: this.company,
      registrationNumber: this.registrationNumber,
      whatsApp: this.whatsApp,
      startDate: this.startDate,
      address: this.address,
      txnid: this.txnId
     };


    console.log(info);
    this.http.post<{url: string}>('http://localhost:3000/api/auth/pay', info ).subscribe(data => {
      console.log(data.url);
      window.open(data.url, '_blank');
    //   this.authService.createUser(this.authService.authData.name, this.authService.authData.email,
    //     this.authService.authData.password, this.authService.authData.vechileType, this.authService.authData.phone,
    //     this.authService.authData.company, this.authService.authData.registrationNumber, this.authService.authData.whatsApp,
    //     this.authService.authData.startDate, this.authService.authData.txnid);
      this.http.post('http://localhost:3000/api/auth/signup', user).subscribe(data => {
      console.log(data);
      this.router.navigate(['/payment']);
    });
    });

  }
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 15;
  //     });
  //   }
  // }
}
