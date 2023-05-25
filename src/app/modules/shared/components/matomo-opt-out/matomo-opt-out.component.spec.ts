import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatomoOptOutComponent } from './matomo-opt-out.component';

describe('MatomoOptOutComponent', () => {
  let component: MatomoOptOutComponent;
  let fixture: ComponentFixture<MatomoOptOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatomoOptOutComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(MatomoOptOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
