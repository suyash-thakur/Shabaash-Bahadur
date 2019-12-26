import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private socialAuthService: AuthService, public authservice: AuthenticationService, public router: Router) {}

  public  signinWithGoogle() {
    console.log('google');
    const socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider)
    .then((userData) => {
       // on success
       // this will return user data from google. What you need is a user token which you will send it to the server
       console.log(userData);
       this.authservice.authData.name = userData.name;
       this.authservice.authData.email = userData.email;
       this.authservice.authData.password = userData.id;
       this.router.navigate(['/phone']);

       });
 }
 public facebookLogin() {
  let socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
  this.socialAuthService.signIn(socialPlatformProvider).then(
    (userData) => {
          //this will return user data from facebook. What you need is a user token which you will send it to the server
          console.log(userData);
          
       this.authservice.authData.name = userData.name;
       this.authservice.authData.email = userData.email;
       this.authservice.authData.password = userData.id;
       this.router.navigate(['/phone']);

    }
  );
 }

}
