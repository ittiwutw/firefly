import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapListPage } from './map-list.page';

describe('MapListPage', () => {
  let component: MapListPage;
  let fixture: ComponentFixture<MapListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
