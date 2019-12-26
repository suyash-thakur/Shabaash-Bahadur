import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BikeModelPage } from './bike-model.page';

describe('BikeModelPage', () => {
  let component: BikeModelPage;
  let fixture: ComponentFixture<BikeModelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeModelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BikeModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
