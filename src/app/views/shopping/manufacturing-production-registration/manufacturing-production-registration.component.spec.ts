import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturingProductionRegistrationComponent } from './manufacturing-production-registration.component';

describe('ManufacturingProductionRegistrationComponent', () => {
  let component: ManufacturingProductionRegistrationComponent;
  let fixture: ComponentFixture<ManufacturingProductionRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufacturingProductionRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManufacturingProductionRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
