import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerAppComponent } from './color-picker-app.component';

describe('ColorPickerAppComponent', () => {
  let component: ColorPickerAppComponent;
  let fixture: ComponentFixture<ColorPickerAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorPickerAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
