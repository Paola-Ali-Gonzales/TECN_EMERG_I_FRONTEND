import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderToSupplierComponent } from './order-to-supplier.component';

describe('OrderToSupplierComponent', () => {
  let component: OrderToSupplierComponent;
  let fixture: ComponentFixture<OrderToSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderToSupplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderToSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
