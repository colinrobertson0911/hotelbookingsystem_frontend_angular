import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelSingleComponent } from './hotel-single.component';

describe('HotelSingleComponent', () => {
  let component: HotelSingleComponent;
  let fixture: ComponentFixture<HotelSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
