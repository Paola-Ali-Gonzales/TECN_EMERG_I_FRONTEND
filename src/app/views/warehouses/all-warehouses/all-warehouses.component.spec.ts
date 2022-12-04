import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWarehousesComponent } from './all-warehouses.component';

describe('AllWarehousesComponent', () => {
  let component: AllWarehousesComponent;
  let fixture: ComponentFixture<AllWarehousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllWarehousesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllWarehousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
