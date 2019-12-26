import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.page.html',
  styleUrls: ['./car-model.page.scss'],
})
export class CarModelPage implements OnInit {
  carMake: string;

  constructor(private router: Router, public authService: AuthenticationService) { }

  ngOnInit() {
  }
  carClicked(carMake) {
    console.log(carMake);
    switch (carMake) {
      case 'honda':
        this.authService.currentSelected = this.authService.honda;
        break;
        case 'hyundai':
        this.authService.currentSelected = this.authService.hyundai;
        break;
        case 'mahindra':
        this.authService.currentSelected = this.authService.mahindra;
        break;
        case 'nissan':
        this.authService.currentSelected = this.authService.nissan;
        break;
        case 'tata':
        this.authService.currentSelected = this.authService.tata;
        break;
        case 'suzuki':
        this.authService.currentSelected = this.authService.suzuki;
        break;
        case 'volkswagen':
        this.authService.currentSelected = this.authService.volkswagen;
        break;
        case 'renault':
        this.authService.currentSelected = this.authService.renault;
        break;
        case 'chevrolet':
        this.authService.currentSelected = this.authService.chevrolet;
        break;
        case 'bmw':
        this.authService.currentSelected = this.authService.bmw;
        break;
        case 'jaguar':
        this.authService.currentSelected = this.authService.jaguar;
        break;
        case 'mini':
        this.authService.currentSelected = this.authService.mini;
        break;
        case 'jeep':
        this.authService.currentSelected = this.authService.jeep;
        break;
        case 'landrover':
        this.authService.currentSelected = this.authService.landrover;
        break;
        case 'mazda':
        this.authService.currentSelected = this.authService.mazda;
        break;
        case 'mercedes':
        this.authService.currentSelected = this.authService.mercedes;
        break;
        case 'kia':
        this.authService.currentSelected = this.authService.kia;
        break;
        case 'mitsubishi':
        this.authService.currentSelected = this.authService.mitsubishi;
        break;
        case 'rollsroyce':
        this.authService.currentSelected = this.authService.rollsroyce;
        break;
        case 'skoda':
        this.authService.currentSelected = this.authService.skoda;
        break;
        case 'ford':
        this.authService.currentSelected = this.authService.ford;
        break;
        case 'audi':
        this.authService.currentSelected = this.authService.audi;
        break;
        case 'fiat':
        this.authService.currentSelected = this.authService.fiat;
        break;
        case 'lexus':
        this.authService.currentSelected = this.authService.lexsus;
        break;
    }
    
    this.authService.authData.company = carMake;
    this.router.navigate(['/car-type']);
  }
}
