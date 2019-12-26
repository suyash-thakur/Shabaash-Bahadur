import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-type',
  templateUrl: './car-type.page.html',
  styleUrls: ['./car-type.page.scss'],
})
export class CarTypePage implements OnInit {
  models: any;

  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit() {

    this.models = this.authService.currentSelected;
    console.log(this.models);
  }

  selectModel(model) {
    this.authService.authData.model = model;
    console.log(this.authService.authData);
    this.router.navigate(['/info']);
  }
}
