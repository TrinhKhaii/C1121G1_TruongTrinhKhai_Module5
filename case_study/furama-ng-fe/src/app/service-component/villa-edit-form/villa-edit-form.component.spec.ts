import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaEditFormComponent } from './villa-edit-form.component';

describe('VillaEditFormComponent', () => {
  let component: VillaEditFormComponent;
  let fixture: ComponentFixture<VillaEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillaEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
