import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllSurveyPage } from './all-survey.page';

describe('AllSurveyPage', () => {
  let component: AllSurveyPage;
  let fixture: ComponentFixture<AllSurveyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSurveyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllSurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
