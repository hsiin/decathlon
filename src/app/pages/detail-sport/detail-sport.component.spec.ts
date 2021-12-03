import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSportComponent } from './detail-sport.component';

describe('DetailSportComponent', () => {
  let component: DetailSportComponent;
  let fixture: ComponentFixture<DetailSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
