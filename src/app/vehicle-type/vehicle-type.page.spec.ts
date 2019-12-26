import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehicleTypePage } from './vehicle-type.page';

describe('VehicleTypePage', () => {
  let component: VehicleTypePage;
  let fixture: ComponentFixture<VehicleTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
