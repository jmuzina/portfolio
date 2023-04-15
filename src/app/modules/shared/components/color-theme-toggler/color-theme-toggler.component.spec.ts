import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorThemeTogglerComponent } from './color-theme-toggler.component';

describe('ColorThemeTogglerComponent', () => {
  let component: ColorThemeTogglerComponent;
  let fixture: ComponentFixture<ColorThemeTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorThemeTogglerComponent ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ColorThemeTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
