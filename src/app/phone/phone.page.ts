import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { environment } from '../../environments/environment';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase';
import { Router } from '@angular/router';


export class PhoneNumber {
  
  countryCode = '91';
  phone: string;

  get e164() {
    const num = this.countryCode  + this.phone;
    return `+${num}`;
  }

}
@Component({
  selector: 'app-phone',
  templateUrl: './phone.page.html',
  styleUrls: ['./phone.page.scss'],
})
export class PhonePage implements OnInit {
  windowRef: any;
  phoneNumber = new PhoneNumber();
  verificationCode: string;
  user: any;


  
  constructor(private authService: AuthenticationService, public toastController: ToastController, private route: Router) { }

  ngOnInit() {
    const fire_app = firebase.initializeApp(environment.firebaseConfig);
    this.windowRef = this.authService.Window;
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.windowRef.recaptchaVerifier.render();
  }

  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;
  
    const num = this.phoneNumber.e164;
  
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {
  
                this.windowRef.confirmationResult = result;
  
            })
            .catch( error => console.log(error) );
  
  }
  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {

                    this.user = result.user;
                    this.presentToast('Verified Successfully ');
                    this.authService.authData.phone = this.phoneNumber.phone;
                    console.log(this.authService.authData.phone);
                    this.route.navigate(['/vehicle-type']);

    })
    .catch( error => this.presentToast('Verification Unsuccessful'));
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}

