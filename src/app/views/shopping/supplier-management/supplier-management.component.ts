import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier-management',
  templateUrl: './supplier-management.component.html',
  styleUrls: ['./supplier-management.component.css']
})
export class SupplierManagementComponent implements OnInit {

  budgets = [
    {
      ref: 'ref 1',
      base: 'example',
      discounts: '0',
      delivery_date: '10/11/2022',
      conditions: 'Condition 1',
      type_payment: 'Type',
      divida: 'example',
      quotation: '0',
      state: 'progress'
    },
    {
      ref: 'ref 2',
      base: 'example',
      discounts: '0',
      delivery_date: '10/11/2022',
      conditions: 'Condition 1',
      type_payment: 'Type',
      divida: 'example',
      quotation: '0',
      state: 'progress'
    },
    {
      ref: 'ref 3',
      base: 'example',
      discounts: '0',
      delivery_date: '10/11/2022',
      conditions: 'Condition 1',
      type_payment: 'Type',
      divida: 'example',
      quotation: '0',
      state: 'progress'
    },
  ];

  products = [
    {
      title: 'Product 1',
      code: '0123',
      unit_price: '15',
      iva: '0',
      warehouse: 'Almacen 1',
      category: 'Category'
    },
    {
      title: 'Product 2',
      code: '0124',
      unit_price: '15',
      iva: '0',
      warehouse: 'Almacen 1',
      category: 'Category'
    },
    {
      title: 'Product 3',
      code: '0125',
      unit_price: '15',
      iva: '0',
      warehouse: 'Almacen 1',
      category: 'Category'
    },
  ];

  
  constructor() { }

  ngOnInit(): void {
  }

}
