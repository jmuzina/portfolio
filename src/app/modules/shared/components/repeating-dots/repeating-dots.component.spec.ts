import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatingDotsComponent } from './repeating-dots.component';

describe('RepeatingDotsComponent', () => {
  let component: RepeatingDotsComponent;
  let fixture: ComponentFixture<RepeatingDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepeatingDotsComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(RepeatingDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
