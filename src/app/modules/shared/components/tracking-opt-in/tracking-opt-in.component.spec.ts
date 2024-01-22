import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingOptInComponent } from './tracking-opt-in.component';

describe('TrackingOptInComponent', () => {
  let component: TrackingOptInComponent;
  let fixture: ComponentFixture<TrackingOptInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrackingOptInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrackingOptInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
