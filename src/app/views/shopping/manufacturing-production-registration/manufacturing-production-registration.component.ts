import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufacturing-production-registration',
  templateUrl: './manufacturing-production-registration.component.html',
  styleUrls: ['./manufacturing-production-registration.component.css']
})
export class ManufacturingProductionRegistrationComponent implements OnInit {

  selectedProduct: string
  productList = [
    {id: 1, name: 'Product 1'},
    {id: 2, name: 'Product 2'},
    {id: 3, name: 'Product 3'},
    {id: 4, name: 'Product 4'},
    {id: 5, name: 'Product 5'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
