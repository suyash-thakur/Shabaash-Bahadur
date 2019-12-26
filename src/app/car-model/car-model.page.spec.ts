import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarModelPage } from './car-model.page';

describe('CarModelPage', () => {
  let component: CarModelPage;
  let fixture: ComponentFixture<CarModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
