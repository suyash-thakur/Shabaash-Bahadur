import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {


  constructor(public alertcontroller: AlertController, public authservice: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

 async onSignup(name: string, email: string, password: string, conpassword: string) {
    console.log(name + email);
    if (password !== conpassword) {
      const alert = await this.alertcontroller.create({
        header: 'Alert',
        message: 'Password does not match !!',
      buttons: ['OK']
      });
      await alert.present();
      return;
    }
    if (name === '' || email === '' || password === '') {
      const alert = await this.alertcontroller.create({
        header: 'Alert',
        message: 'Enter all fields !!',
      buttons: ['OK']
      });
      await alert.present();

    } else {
      this.authservice.authData.name = name;
      this.authservice.authData.email = email;
      this.authservice.authData.password = password;
      console.log(this.authservice.authData);
      this.router.navigate(['/phone']);

    }
}

}
