import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRackComponent } from './form-rack.component';

describe('FormRackComponent', () => {
  let component: FormRackComponent;
  let fixture: ComponentFixture<FormRackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
