import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-vehicle-type',
  templateUrl: './vehicle-type.page.html',
  styleUrls: ['./vehicle-type.page.scss'],
})
export class VehicleTypePage implements OnInit {

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }
  carClicked() {
    this.authService.authData.vechileType = 'car';
    this.router.navigate(['/car-model']);
    
  }
  bikeClicked() {
    this.authService.authData.vechileType = 'bike';
    this.router.navigate(['/bike-model']);

  }
}
