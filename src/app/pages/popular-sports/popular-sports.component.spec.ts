import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSportsComponent } from './popular-sports.component';

describe('PopularSportsComponent', () => {
  let component: PopularSportsComponent;
  let fixture: ComponentFixture<PopularSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularSportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
