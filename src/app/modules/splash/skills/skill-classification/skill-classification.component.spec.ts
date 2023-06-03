import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillClassificationComponent } from './skill-classification.component';

describe('SkillClassificationComponent', () => {
  let component: SkillClassificationComponent;
  let fixture: ComponentFixture<SkillClassificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillClassificationComponent],
    });
    fixture = TestBed.createComponent(SkillClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
