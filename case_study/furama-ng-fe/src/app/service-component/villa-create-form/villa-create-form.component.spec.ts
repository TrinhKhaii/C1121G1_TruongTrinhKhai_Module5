import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillaCreateFormComponent } from './villa-create-form.component';

describe('VillaCreateFormComponent', () => {
  let component: VillaCreateFormComponent;
  let fixture: ComponentFixture<VillaCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillaCreateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillaCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
