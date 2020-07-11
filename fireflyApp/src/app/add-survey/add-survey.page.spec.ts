import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSurveyPage } from './add-survey.page';

describe('AddSurveyPage', () => {
  let component: AddSurveyPage;
  let fixture: ComponentFixture<AddSurveyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSurveyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
