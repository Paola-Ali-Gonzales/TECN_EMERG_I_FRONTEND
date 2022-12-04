import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSupplierOrderComponent } from './new-supplier-order.component';

describe('NewSupplierOrderComponent', () => {
  let component: NewSupplierOrderComponent;
  let fixture: ComponentFixture<NewSupplierOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSupplierOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSupplierOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
