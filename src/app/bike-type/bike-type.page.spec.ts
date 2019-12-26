import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BikeTypePage } from './bike-type.page';

describe('BikeTypePage', () => {
  let component: BikeTypePage;
  let fixture: ComponentFixture<BikeTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeTypePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BikeTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
