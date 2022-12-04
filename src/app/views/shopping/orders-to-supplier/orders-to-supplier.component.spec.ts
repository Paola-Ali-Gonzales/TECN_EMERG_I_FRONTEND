import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersToSupplierComponent } from './orders-to-supplier.component';

describe('OrdersToSupplierComponent', () => {
  let component: OrdersToSupplierComponent;
  let fixture: ComponentFixture<OrdersToSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersToSupplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersToSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
