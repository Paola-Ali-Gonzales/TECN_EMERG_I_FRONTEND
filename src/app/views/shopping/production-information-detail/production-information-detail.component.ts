import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-production-information-detail',
  templateUrl: './production-information-detail.component.html',
  styleUrls: ['./production-information-detail.component.css']
})
export class ProductionInformationDetailComponent implements OnInit {

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
