import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-bike-model',
  templateUrl: './bike-model.page.html',
  styleUrls: ['./bike-model.page.scss'],
})
export class BikeModelPage implements OnInit {

  constructor(private router: Router, public authService: AuthenticationService) { }

  ngOnInit() {
  }
bikeClick(bikeMake) {
  console.log(bikeMake);
  switch(bikeMake) {
    case 'hero':
      this.authService.currentSelected = this.authService.hero;
      break;
    case 'honda':
        this.authService.currentSelected = this.authService.hondaBike;
        break;
    case 'yamaha':
        this.authService.currentSelected = this.authService.yamaha;
        break;
    case 'ktm':
        this.authService.currentSelected = this.authService.ktm;
        break;
    case 'kawasaki':
        this.authService.currentSelected = this.authService.kawasaki;
        break;
    case 'royalenfield':
        this.authService.currentSelected = this.authService.royalenfield;
        break;
    case 'tvs':
        this.authService.currentSelected = this.authService.tvs;
        break;
    case 'suzuki':
        this.authService.currentSelected = this.authService.suzukiBike;
        break;
    case 'bajaj':
        this.authService.currentSelected = this.authService.bajaj;
        break;
  }
  this.router.navigate(['/bike-type']);
}
}
