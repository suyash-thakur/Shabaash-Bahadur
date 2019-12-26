import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bike-type',
  templateUrl: './bike-type.page.html',
  styleUrls: ['./bike-type.page.scss'],
})
export class BikeTypePage implements OnInit {

  models: any;

  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    
    this.models = this.authService.currentSelected;
    console.log(this.models);
  }
  selectModel() {
    this.authService.authData.model = this.models;
    console.log(this.authService.authData);
    this.router.navigate(['/info']);

  }
}
